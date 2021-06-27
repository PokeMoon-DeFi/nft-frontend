import { FC } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export const VideoPlayer: FC<ReactPlayerProps> = (props) => {
  return <ReactPlayer url="https://streamable.com/yqu16t" {...props} />;
};
