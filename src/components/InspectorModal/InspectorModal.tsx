import InspectorCard from "./InspectorCard";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import { PortalHandler } from "nft-uikit";
import { FC, useEffect, useState } from "react";
import { PokemoonNft } from "config/constants/nfts/types";

export interface InspectorDialogProps
  extends Omit<DialogProps, "open">,
    PortalHandler {
  nft: PokemoonNft;
}

export const InspectorDialog: FC<InspectorDialogProps> = ({
  nft,
  handleClose,
}) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!open && handleClose) {
      handleClose();
    }
  }, [open, handleClose]);
  return (
    <Dialog
      fullScreen
      open={open}
      onClick={() => {}}
      PaperProps={{
        style: {
          overflow: "hidden",
        },
      }}
    >
      <InspectorCard nft={nft} handleClose={() => setOpen(false)} />
    </Dialog>
  );
};
