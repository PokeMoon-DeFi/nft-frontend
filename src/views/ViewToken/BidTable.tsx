import React, { FC } from "react";
import {
  DataGrid,
  DataGridProps,
  GridCellParams,
  GridColDef,
} from "@material-ui/data-grid";
import Button from "components/Button";
import { makeStyles } from "@material-ui/core/styles";

interface DataRow {
  bidder: string;
  offering: number;
}

interface Props {
  data: DataRow[];
  isOwner: boolean;
}

const ButtonCell = (params: GridCellParams) => {
  return <Button>Select Bid</Button>;
};

const getColumns = (isOwner) => {
  let columns: GridColDef[] = [
    {
      field: "bidder",
      headerName: "Bidder",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "offering",
      headerName: "Offering",
      headerAlign: "center",
      align: "center",
      flex: 1,
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
