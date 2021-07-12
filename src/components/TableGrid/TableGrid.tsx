import React, { FC, useCallback, useMemo } from "react";
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
import { TypeChip, RarityChip, PackChip } from "components/Chip";
import Box from "@material-ui/core/Box";
//@ts-ignore
import Jdenticon from "react-jdenticon";
import Button from "components/Button";
import SearchIcon from "@material-ui/icons/Search";
import useModal from "hooks/useModal";
import { InspectorDialog } from "components/Modal";
import { PokemoonNft } from "config/constants/nfts/types";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useMarket from "hooks/useMarket";
import { numberWithCommas } from "utils";
export interface TableGridProps {
  nfts: Array<PokemoonNft>;
  hidePackId?: boolean;
  getRowId?: GridRowIdGetter;
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

const ButtonCell = (params: GridCellParams) => {
  const nft = params.row;
  const history = useHistory();
  //@ts-ignore
  const [showModal] = useModal(<InspectorDialog nft={nft} />);
  const handleClick = useCallback(() => {
    const { tokenId, set } = nft;
    if (tokenId?.length > 2) {
      history.push(`token/${set}/${tokenId}`);
    } else {
      showModal();
    }
  }, [history, showModal, nft]);
  return (
    <Button endIcon={<SearchIcon />} onClick={handleClick}>
      Inspect
    </Button>
  );
};

const getColumns = (hidePrice, hidePackId) => {
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
      hide: hidePackId,
      // flex: 1,
      width: 120,
      renderCell: PackIdFormatter,
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
      field: "price",
      headerAlign: "center",
      headerName: "Price",
      align: "center",
      flex: 1,
      hide: hidePrice,
      valueFormatter: ({ value }) =>
        `${value ? numberWithCommas(Number(value)) : 0} KBN`,
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
      renderCell: (params: GridCellParams) => <ButtonCell {...params} />,
    },
  ];

  return columns;
};

//Take the combined set name, rarity, and pkmoon number to make a uniqueId
const getSetIndex = ({ set, number, rarity }: any) => {
  const m = {
    blastOff: 0,
    ampedUp: 1,
    meanGreens: 2,
  };
  const r = {
    Common: 0,
    Uncommon: 1,
    Rare: 2,
    Legendary: 3,
    Moonlike: 4,
  };
  //@ts-ignore
  return m[set] * 1000 + number * 10 + r[rarity];
};

const TableGrid: FC<TableGridProps> = ({ nfts, hidePackId, getRowId }) => {
  const classes = useStyles();
  const location = useLocation();
  const isMarket = /.*\/market.*/.test(location.pathname);
  const { isBuying } = useMarket();

  // if (hidePackId) {
  //   columns = columns.filter((c) => c.field !== "packId");
  // }
  // if (isMarket && !isBuying) {
  //   columns = columns.filter((c) => c.field !== "price");
  // }

  // const dataColumns = useMemo(() => {
  //   const result = columns.map((c) => {
  //     if (hidePackId && c.field === "packId") {
  //       return { ...c, hide: true };
  //     } else if (isMarket && !isBuying && c.field === "price") {
  //       return { ...c, hide: true };
  //     } else if (isMarket && !isBuying && c.field === "price") {
  //       return { ...c, hide: false };
  //     } else return c;
  //   });

  //   return result;
  // }, [isMarket, isBuying, hidePackId]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={nfts}
        columns={getColumns(!isMarket || !isBuying, hidePackId)}
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
