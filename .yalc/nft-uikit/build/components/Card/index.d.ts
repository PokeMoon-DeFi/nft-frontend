import React from "react";
interface StyledCardProps {
    cardId?: string;
    active?: boolean;
    onClick?: () => void;
}
interface CardHandle {
    setFocus: (active: boolean) => void;
}
declare const Card: React.ForwardRefExoticComponent<StyledCardProps & React.RefAttributes<CardHandle>>;
export default Card;
