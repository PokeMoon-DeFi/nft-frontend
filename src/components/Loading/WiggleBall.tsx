import styled from "styled-components";

interface WiggleBallProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  height?: number;
}

const Ball = styled.div<WiggleBallProps>`
  display: inline-block;
  animation: anti-wiggle 2s ease-in-out infinite;
  transform-origin: bottom center;
  cursor: pointer;
  @keyframes wiggle {
    20% {
      box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(7deg);
    }

    40% {
      box-shadow: inset -11px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(-14deg);
    }

    60% {
      box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(4deg);
    }

    80% {
      box-shadow: inset -8px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(-2deg);
    }

    100% {
      box-shadow: inset -7px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(0deg);
    }
  }

  @keyframes anti-wiggle {
    20% {
      transform: translateX(4px) rotate(-7deg);
    }

    40% {
      transform: translateX(-8px) rotate(14deg);
    }

    60% {
      transform: translateX(2px) rotate(-4deg);
    }

    80% {
      transform: translateX(-1px) rotate(2deg);
    }

    100% {
      transform: translateX(0px) rotate(0deg);
    }
  }
`;

const WiggleBall: React.FC<WiggleBallProps> = ({ src, height, ...props }) => {
  return (
    <Ball {...props}>
      <img height={height ? height : 80} src={src} alt={"sdaf"} />
    </Ball>
  );
};

export default WiggleBall;
