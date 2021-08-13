import React, { FC } from "react";
import { DataGrid, GridCellParams, GridColDef } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import Button from "components/Button";
import useModal from "hooks/useModal";
import { useWeb3React } from "@web3-react/core";
import useBid from "hooks/useBid";

interface Props {
  data: BidInfo[];
}

const ButtonCell = (params: GridCellParams) => {
  const row = params.row;
  const { tokenId, packName } = row;
  const { account } = useWeb3React();
  const { cancelBid } = useBid();
  return (
    <Button
      onClick={() => {
        cancelBid(tokenId, packName);
      }}
    >
      Cancel Bid
    </Button>
  );
};

const getColumns = (isOwner) => {
  const columns: GridColDef[] = [
    {
      field: "offering",
      headerName: "Offering",
      headerAlign: "center",
      align: "center",
      flex: 1,
      valueFormatter: ({ value }) => `${value} KBN`,
    },
    {
      field: "tokenId",
      headerName: "Token ID",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
  ];

  if (isOwner) {
    columns.push({
      field: "modalId",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params: GridCellParams) => <ButtonCell {...params} />,
    });
  }
  return columns;
};

const useStyles = makeStyles({
  root: { backgroundColor: "white", display: "flex", flex: 1 },
});

const OwnerBids: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { account } = useWeb3React();
  const ownerAccount = useParams().owner;
  const isOwner = account === ownerAccount;

  return (
    <DataGrid
      rows={data}
      pagination
      autoHeight
      hideFooterSelectedRowCount={true}
      columns={getColumns(isOwner)}
      getRowId={(row) => row.tokenId}
      className={classes.root}
    />
  );
};

export default OwnerBids;
