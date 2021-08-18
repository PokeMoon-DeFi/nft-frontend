import React, { FC, useState } from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { DialogActions, Typography, useTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import { useMediaQuery } from "@material-ui/core";
import { numberWithCommas } from "utils";

interface ModalProps extends DialogProps {
  handleClose: () => void;
  handleConfirm: (price: string) => void;
  prompt?: string;
}

const PriceModal: FC<ModalProps> = ({
  handleClose,
  handleConfirm,
  prompt,
  ...props
}) => {
  const [price, setPrice] = useState(0);
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog {...props}>
      <DialogTitle>Confirm Asking Price</DialogTitle>
      <DialogContent>
        {prompt ? (
          <DialogContentText>{prompt}</DialogContentText>
        ) : (
          <DialogContentText>
            Sell this NFT for {price ? numberWithCommas(price) : " "} KBN
          </DialogContentText>
        )}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            label="KBN Amount"
            value={numberWithCommas(price)}
            fullWidth
            style={{
              marginBottom: 24,
              flex: 1,
              maxWidth: "20ch",
              display: "flex",
            }}
            onChange={(event: any) => {
              const val: string = event.target.value;
              if (val.length > 12) return;
              if (!val) {
                setPrice(0);
                return;
              }

              if (/^[0-9,]*$/.test(val)) {
                const num = Number.parseInt(val.replace(/,/g, ""));
                //@ts-ignore
                setPrice(num);
              }
            }}
            inputProps={{
              style: {
                fontSize: 24,
                textAlign: "center",
                maxWidth: "12ch",
                width: "100%",
                flex: 1,
              },
            }}
            InputLabelProps={{
              style: { display: "none" },
            }}
            error={price <= 0}
          />
          <Typography
            variant="h4"
            style={{ alignSelf: "center", textAlign: "center", marginLeft: 16 }}
          >
            {" KBN"}
          </Typography>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            disabled={price <= 0}
            onClick={() => {
              handleConfirm(price.toString());
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default PriceModal;
