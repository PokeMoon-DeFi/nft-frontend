import { useAppSelector } from "providers";
import { useMemo } from "react";

const useCards = () => {
  const blastOffCards = useAppSelector(
    (state) => state.user.nftBalance.blastOff.cards,
    (a, b) => a.length === b.length
  );

  const ampedUpCards = useAppSelector(
    (state) => state.user.nftBalance.ampedUp.cards,
    (a, b) => a.length === b.length
  );

  return useMemo(
    () => [...ampedUpCards, ...blastOffCards],
    [ampedUpCards, blastOffCards]
  );
};

export default useCards;
