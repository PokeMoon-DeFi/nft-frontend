import React, { FC, useState } from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { DialogActions, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Button } from "nft-uikit";

interface ModalProps extends DialogProps {
  handleClose: () => void;
  handleConfirm: (price: number) => void;
}

const PriceModal: FC<ModalProps> = ({
  handleClose,
  handleConfirm,
  ...props
}) => {
  const [price, setPrice] = useState(0);
  return (
    <Dialog {...props}>
      <DialogTitle>Confirm Asking Price</DialogTitle>
      <DialogContent>
        <DialogContentText>Sell this NFT for {price} KBN</DialogContentText>
        <div style={{ display: "flex" }}>
          <TextField
            label="KBN Amount"
            type="number"
            value={price}
            style={{ maxWidth: 100, marginBottom: 24 }}
            onChange={(event: any) => {
              //@ts-ignore
              setPrice(event.target.value);
            }}
            inputProps={{ style: { fontSize: 24, textAlign: "center" } }}
            InputLabelProps={{
              style: { display: "none" },
            }}
            error={price <= 0}
          />
          <Typography
            variant="h4"
            component="span"
            style={{ alignSelf: "center", textAlign: "center", flex: 1 }}
          >
            KBN
          </Typography>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => handleConfirm(price)}>Confirm</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default PriceModal;
