import { useCallback, useContext, useEffect } from "react";
import { ModalContext } from "providers/ModalContext";

export type Handler = () => void;

const useModal = (modal: React.ReactElement): [Handler, Handler] => {
  const { onPresent, onDismiss } = useContext(ModalContext);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
