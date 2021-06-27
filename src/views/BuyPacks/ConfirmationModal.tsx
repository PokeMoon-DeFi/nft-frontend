import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { useState, useEffect } from "react";
import { useAppSelector } from "providers";
import { Link } from "@material-ui/core";
import { PACK_COST } from "config";
import Button from "components/Button";

interface ModalProps extends DialogProps {
  handleClose: () => void;
  handleConfirm: (packAmount: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  handleClose,
  handleConfirm,
  ...props
}) => {
  const [packAmount, setPackAmount] = useState(1);
  const [pbCost, setPbCost] = useState<number>(PACK_COST);
  const apb = useAppSelector((state) => state.user.balance.apb);
  useEffect(() => {
    setPbCost(PACK_COST * packAmount);
  }, [packAmount]);

  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: 15,
          padding: 15,
          border: "8px purple outset",
        },
      }}
      {...props}
    >
      <DialogTitle>Confirm Purchase</DialogTitle>

      <DialogContent>
        {/* <AmpedUp /> */}
        <Grid
          container
          justify="space-around"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="standard-number"
              label="# Of Packs"
              type="number"
              value={packAmount}
              style={{ maxWidth: 100, marginBottom: 24 }}
              onChange={(event: any) => {
                if (event.target.value > 10) {
                  setPackAmount(10);
                  return;
                } else if (event.target.value < 1) {
                  setPackAmount(1);
                  return;
                }
                //@ts-ignore
                setPackAmount(event.target.value);
              }}
              inputProps={{ style: { fontSize: 24, textAlign: "center" } }}
              InputLabelProps={{
                style: { display: "none" },
              }}
              error={parseFloat(apb) < pbCost}
            />
          </Grid>
          <Grid item style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup>
              <Button
                onClick={() => setPackAmount((val) => val - 1)}
                disabled={packAmount <= 1}
              >
                <RemoveCircleIcon />
              </Button>
              <Button
                onClick={() => setPackAmount((val) => val + 1)}
                disabled={packAmount >= 10}
              >
                <AddCircleIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Your Balance: {parseFloat(apb).toFixed(1)}
        </DialogContentText>
        {parseFloat(apb) > pbCost ? (
          <DialogContentText>
            <span style={{ fontWeight: "bold" }}>{`${pbCost} PBs `}</span> will
            be burned in this transaction
          </DialogContentText>
        ) : (
          <>
            <DialogContentText>You do not have enough PBs!</DialogContentText>
            <Link href="https://exchange.pokemoon.app/#/swap?outputCurrency=0x90274Ca54A8D37789450a4D909400A79cfcE6A86">
              Get APB
            </Link>
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleConfirm(packAmount)}
          color="primary"
          autoFocus
          disabled={parseFloat(apb) < pbCost}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
