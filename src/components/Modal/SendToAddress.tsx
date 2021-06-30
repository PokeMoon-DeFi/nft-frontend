import React, { FC, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import styled from "styled-components";
import { useMediaQuery, useTheme } from "@material-ui/core";

interface SendToAddressProps extends DialogProps {
  handleConfirm: (address: string) => void;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 60ch; */
`;

const SendToAddress: FC<SendToAddressProps> = ({
  handleConfirm,
  handleClose,
  ...props
}) => {
  const [inputVal, setInputVal] = useState<string>("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isValidAddress = (val: string) => {
    return /^0x[a-zA-z0-9]{40}$/.test(val);
  };

  return (
    <Dialog
      {...props}
      BackdropComponent={Backdrop}
      TransitionComponent={Transition}
    >
      <Container style={{ width: isMobile ? "auto" : "60ch" }}>
        <TextField
          fullWidth={true}
          error={!!inputVal && !isValidAddress(inputVal)}
          id="standard-error-helper-text"
          variant="outlined"
          label="Send to Address"
          placeholder="0x00000000000000000000000000000"
          style={{ marginBottom: 20 }}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              if (!inputVal || !isValidAddress(inputVal)) {
                return;
              } else if (handleConfirm) {
                handleConfirm(inputVal.trim());
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </Container>
    </Dialog>
  );
};

export default SendToAddress;
