import React, { FC, useState, useEffect } from "react";
import { PortalHandler } from "providers/ModalContext";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogActions, DialogTitle } from "@material-ui/core";
import Button from "components/Button";
import useBid from "hooks/useBid";
import { useParams, useLocation } from "react-router-dom";

export interface Props extends Omit<DialogProps, "open">, PortalHandler {
  bidder: string;
  offering: string;
  handleClose?: () => void;
  tokenId: number;
}

const ConfirmBidModal: FC<Props> = ({
  tokenId,
  bidder,
  offering,
  handleClose,
}) => {
  const [open, setOpen] = useState(true);
  const { takeBid } = useBid();

  useEffect(() => {
    if (!open && handleClose) {
      handleClose();
    }
  }, [open, handleClose]);

  return (
    <Dialog open={open} PaperProps={{ style: { overflow: "hidden" } }}>
      <DialogTitle>Confirm This Bid?</DialogTitle>
      <DialogContent>{`Sell this NFT for ${offering} KBN?`}</DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button
          onClick={() => {
            takeBid(tokenId, bidder);
            setOpen(false);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmBidModal;
