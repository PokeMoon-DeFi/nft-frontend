import { useEffect, useRef, useState } from "react";
import useRefresh from "./useRefresh";

const useWaitForPack = () => {
  const [packComplete, setPackComplete] = useState(false);
  const [waitInterval, setWaitInterval] = useState<any>(null);
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const interval = setInterval(async () => {
      // await for res
      // if res[4].length is 0, do this call again
      // if it's complete, then clearInterval(interval)
    }, 2000);
    setWaitInterval(interval);

    //This is callback is fired when the component is unmounted
  }, [fastRefresh]);
  return packComplete;
};

export default useWaitForPack;
