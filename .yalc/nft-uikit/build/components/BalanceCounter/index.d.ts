/// <reference types="react" />
interface BalanceCounterProps extends React.HTMLAttributes<HTMLDivElement> {
    imgUrl: string;
    balance: number;
}
declare const BalanceContainer: (props: BalanceCounterProps) => JSX.Element;
export default BalanceContainer;
