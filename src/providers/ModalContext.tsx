import React, { createContext, useState } from "react";
import Portal from "@material-ui/core/Portal";

interface ModalContextProps {
  onPresent: (node: React.ReactElement, key?: string) => void;
  onDismiss: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  onPresent: () => null,
  onDismiss: () => null,
});

export interface PortalHandler {
  handleClose?: () => void;
}

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactElement>();
  const container = React.useRef(null);

  const handlePresent = (node: React.ReactElement) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {isOpen && modalNode ? (
        <Portal container={container.current}>
          {React.cloneElement<PortalHandler>(modalNode, {
            handleClose: handleDismiss,
          })}
        </Portal>
      ) : null}
      <div ref={container}>{children}</div>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
