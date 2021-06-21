import React, { FC } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowData,
  GridCellParams,
  GridRowIdGetter,
  DataGridProps,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
//@ts-ignore
import Jdenticon from "react-jdenticon";
import {
  Button,
  TypeChip,
  RarityChip,
  PackChip,
  InspectorDialog,
  useModal,
} from "nft-uikit";
import SearchIcon from "@material-ui/icons/Search";
import { PokemoonNft } from "config/constants/nfts/types";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useCallback } from "react";
export interface TableGridProps {
  nfts: Array<PokemoonNft>;
  hidePackId?: boolean;
  getRowId?: GridRowIdGetter;
  mode?: string;
}

const TypeCellFormatter = ({ value }: GridCellParams) => {
  return <TypeChip type={value as string} label={value} />;
};

const RarityCellFormatter = ({ value }: GridCellParams) => {
  return <RarityChip rarity={value as string} label={value} />;
};

const PackCellFormatter = ({ value }: GridCellParams) => {
  return <PackChip pack={value as string} />;
};

const PriceCellFormatter = ({ value }: GridCellParams) => {
  return <>{value} KBN</>;
};

const PackIdFormatter = (params: GridCellParams) => {
  const { value } = params;
  //@ts-ignore
  const nft: PokemoonNft = params.row;
  const { set } = nft;
  return (
    <Box
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      #{value}
      {value && (
        <div
          style={{ paddingTop: 15, cursor: "pointer", marginLeft: 20 }}
          onClick={() => {
            window.location.href = `/pack/${set}/${value}`;
          }}
        >
          <Jdenticon size="24" value={value} style={{ margin: "auto" }} />
        </div>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
});

const ShowModalButton = (params: GridCellParams) => {
  const nft = params.row;
  const isMarket = useRouteMatch("/market");
  const history = useHistory();
  //@ts-ignore
  const [showModal] = useModal(<InspectorDialog nft={nft} />);
  const handleViewToken = useCallback(() => {
    history.push(`/token/${nft.set}/${nft.tokenId}`);
  }, [history, nft]);
  return (
    <Button
      endIcon={<SearchIcon />}
      onClick={isMarket ? handleViewToken : showModal}
    >
      Inspect
    </Button>
  );
};

const ViewTokenButton = (params: GridCellParams) => {
  const nft = params.row;
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push(`/token/${nft.set}/${nft.tokenId}`)}
      endIcon={<SearchIcon />}
    >
      View Token
    </Button>
  );
};

let columns: GridColDef[] = [
  {
    field: "tokenId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    // width: 70,
    flex: 1,
    valueFormatter: ({ value }) => `#${value}`,
  },
  {
    field: "packId",
    headerName: "Pack ID",
    headerAlign: "center",
    align: "center",
    // flex: 1,
    width: 120,
    renderCell: PackIdFormatter,
  },
  {
    field: "price",
    headerName: "Price",
    headerAlign: "center",
    align: "center",
    width: 120,
    renderCell: PriceCellFormatter,
  },
  {
    field: "name",
    headerAlign: "center",
    align: "center",
    headerName: "Name",
    // width: 140,
    flex: 1,
  },
  {
    field: "type",
    headerAlign: "center",
    align: "center",
    headerName: "Type",
    width: 130,
    // flex: 1,
    renderCell: TypeCellFormatter,
  },
  {
    field: "rarity",
    headerName: "Rarity",
    // width: 140,
    // flex: 1,
    width: 130,
    headerAlign: "center",
    align: "center",
    renderCell: RarityCellFormatter,
  },
  {
    field: "set",
    headerName: "Set",
    headerAlign: "center",
    align: "center",
    // flex: 1,
    width: 130,
    renderCell: PackCellFormatter,
  },
  {
    field: "modalId",
    align: "center",
    headerName: "Actions",
    width: 150,
    renderCell: (params: GridCellParams) => {
      return <ShowModalButton {...params} />;
    },
  },
];

//Take the combined set name, rarity, and pkmoon number to make a uniqueId
const getSetIndex = ({ set, number, rarity }: any) => {
  const m = {
    blastOff: 0,
    ampedUp: 1,
  };
  const r = {
    Common: 0,
    Uncommon: 1,
    Rare: 2,
    Legendary: 3,
    Moonlike: 4,
  };
  //@ts-ignore
  return m[set] * 100 + number * 10 + r[rarity];
};

const TableGrid: FC<TableGridProps> = ({ nfts, hidePackId, getRowId }) => {
  const classes = useStyles();
  if (hidePackId) {
    columns = columns.filter((c) => c.field !== "packId");
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={nfts}
        columns={columns}
        pageSize={10}
        getRowId={!!getRowId ? getRowId : (row) => getSetIndex(row)}
        hideFooterSelectedRowCount={true}
        autoHeight
        loading={!nfts || nfts.length === 0}
        className={classes.root}
        pagination
      />
    </div>
  );
};

export default TableGrid;
