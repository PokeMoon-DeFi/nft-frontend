import { useAppSelector } from "providers";
import { useMemo } from "react";

const useNftCollection = () => {
  const blastOffCards = useAppSelector(
    (state) => state.user.nftBalance.blastOff.cards,
    (a, b) => a.length === b.length
  );

  const ampedUpCards = useAppSelector(
    (state) => state.user.nftBalance.ampedUp.cards,
    (a, b) => a.length === b.length
  );

  const meanGreenCards = useAppSelector(
    (state) => state.user.nftBalance.meanGreens.cards,
    (a, b) => a.length === b.length
  );

  const collection = useMemo(() => {
    return [...blastOffCards, ...ampedUpCards, ...meanGreenCards];
  }, [blastOffCards, ampedUpCards, meanGreenCards]);
  return collection;
};

export default useNftCollection;
