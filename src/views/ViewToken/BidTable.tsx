import React, { FC } from "react";
import {
  DataGrid,
  DataGridProps,
  GridCellParams,
  GridColDef,
} from "@material-ui/data-grid";
import Button from "components/Button";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmBidModal from "components/Modal/ConfirmBidModal";
import useModal from "hooks/useModal";
import { useParams, Link } from "react-router-dom";
import { utils } from "ethers";

interface DataRow {
  bidder: string;
  offering: number;
}

interface Props {
  data: DataRow[];
  isOwner: boolean;
}

const BidderCell = (params: GridCellParams) => {
  const { bidder } = params.row;
  return (
    <Link to={`/owner/${bidder}`}>
      {[bidder.slice(0, 5), bidder.slice(-5)].join("...")}
    </Link>
  );
};

const ButtonCell = (params: GridCellParams) => {
  const row = params.row;
  const { id } = useParams();
  const [showModal] = useModal(
    <ConfirmBidModal
      bidder={row.bidder}
      offering={utils.formatEther(row.offering)}
      tokenId={id}
    />
  );
  return <Button onClick={showModal}>Select Bid</Button>;
};

const getColumns = (isOwner) => {
  let columns: GridColDef[] = [
    {
      field: "bidder",
      headerName: "Bidder",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params: GridCellParams) => <BidderCell {...params} />,
    },
    {
      field: "offering",
      headerName: "Offering",
      headerAlign: "center",
      align: "center",
      flex: 1,
      //@ts-ignore
      valueFormatter: ({ value }) => `${utils.formatEther(value)}`,
    },
  ];
  if (isOwner) {
    columns.push({
      field: "modalId",
      headerName: "Actions",
      align: "center",
      width: 150,
      renderCell: (params: GridCellParams) => <ButtonCell {...params} />,
    });
  }
  return columns;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
});

const BidTable: FC<Props> = ({ data, isOwner, ...props }) => {
  const classes = useStyles();
  return (
    <div>
      <DataGrid
        rows={data}
        columns={getColumns(isOwner)}
        getRowId={(row) => row.bidder}
        pageSize={5}
        pagination
        autoHeight
        hideFooterSelectedRowCount={true}
        className={classes.root}
      />
    </div>
  );
};

export default BidTable;
