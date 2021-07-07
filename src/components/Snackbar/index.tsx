import React, { FC, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useAppSelector } from "providers";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { clearMessage } from "providers/state/Market";

const getVariant = (status: string) => {
  switch (status) {
    default:
    case "pending":
      return "default";
    case "fulfilled":
      return "success";
    case "rejected":
      return "error";
  }
};

const Notifications: FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const pending = useAppSelector((state) => state.market.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pending) return;
    const { type, status } = pending;
    if (pending.message) {
      enqueueSnackbar(`${pending.message}`, {
        variant: getVariant(status),
        action: (key) => {
          return <Button onClick={() => closeSnackbar(key)}>Close</Button>;
        },
        onClose: () => {
          dispatch(clearMessage());
        },
      });
    }
  }, [pending, enqueueSnackbar, closeSnackbar, dispatch]);

  return <></>;
};

export default Notifications;
