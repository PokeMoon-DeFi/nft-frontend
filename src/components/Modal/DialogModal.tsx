import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";

interface ModalProps extends DialogProps {
  handleClose: () => void;
  handleConfirm?: () => void;
  title?: string;
  content?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  handleClose,
  handleConfirm,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      {content && (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
