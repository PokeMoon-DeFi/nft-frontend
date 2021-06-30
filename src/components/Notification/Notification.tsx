import React from "react";
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";

interface NotificationProps extends SnackbarProps {
  handleClose: () => void;
  message?: string;
  href?: string;
  linkLabel?: string;
}

const Notification: React.FC<NotificationProps> = ({
  open,
  handleClose,
  message,
  linkLabel,
  href,
  ...props
}) => {
  const handleCloseWrapper = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    handleClose();
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseWrapper}
        message={message}
        action={
          <React.Fragment>
            {href ? (
              <Button
                href={href}
                style={{
                  backgroundColor: "pink",
                  color: "blue",
                  pointerEvents: "auto",
                }}
              >
                {linkLabel}
              </Button>
            ) : (
              <CircularProgress style={{ marginRight: 20 }} size={30} />
            )}
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

export default Notification;
