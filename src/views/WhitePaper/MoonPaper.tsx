import { FC } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Waves from "./Waves";
import { Button, Logo } from "nft-uikit";
import InfoBox from "./InfoBox";
import Grid from "@material-ui/core/Grid";
import SyncIconOutlined from "@material-ui/icons/SyncOutlined";
import styled from "styled-components";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import BabyMeownaut from "./BabyMeownaut";
import Koban from "./Koban";
import MoonBall from "./MoonBall";
import TimelineStepper from "./Timeline";
import Faq from "./Faq";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Kobandit from "./Kobandit";
import { Parallax, Background } from "react-parallax";

const kbnText =
  "Koban are the central rewards of our platform, and eventually will be integrated with the most utilities. Koban can be earned in the Gyms and Daycare by staking Meownaut and other token pairs! After earning some Koban, they can be sent to the Bank and stored in order to secure a portion of the ever-rotating PokÃ©ball supply and eventually that season's special NFT packs!";
const mntText =
  "A deflationary token, as our long-term project stretches on, you will notice the supply of Meownaut getting lower and lower, making this fortuitous genetic anomaly an ever-rarer commodity! There is a 4% moving fee 2% will be burned the other 2% will go the the meownaut holders (Unless you staked your MNT in daycare)";
const pbText =
  "All PB tokens have a number designation that indicates what season they are (PB-2114 is the firstset, PB-2116 is the second set, etc.). PB has a limited total supply and when it is drained there will be no more! Stake your Koban in the Bank to earn PB until the PB runs out. There is a 20% Koban Penalty for unstaking your Koban before the PB runs out, so hang tight! Once the total supply of PB has been distributed, the Koban Withdrawal fee is waived and the NFT exchange opens!";
const IconWrapper = styled.div`
  padding: 8px 16px;
  box-sizing: content-box;
  border-radius: 4px;
  background-color: pink;
  margin: 8px;
`;

const Title = styled(Typography)``;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 14pt;
  margin: 5px;
`;

const StyledSection = styled.div`
  background-color: #eae1f7;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e1a3f0' fill-opacity='0.28'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const StyledBlurb = styled(Typography)`
  text-align: center;
`;

const StyledHeader = styled.div`
  background: linear-gradient(
    0deg,
    rgba(238, 39, 255, 1) 0%,
    rgba(198, 100, 224, 1) 54%,
    rgba(134, 138, 246, 1) 100%
  );
  /* height: 55vh; */
  height: auto;
  border-radius: 15px 30px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  flex: 1;
  min-width: 200;
`;

const StyledBlurbContainer = styled.div``;

const HeroTitle = styled(Typography)`
  color: white;
  font-size: 26pt;
  text-shadow: 12px 12px 20px #34036d;
`;

const HeroBlurb = styled(Typography)`
  text-shadow: 12px 12px 20px #34036d;
  margin-bottom: 20px;
`;

const OutlinedBlurb = styled(Paper)`
  background-color: rgb(246 216 244 / 86%);
  border: 4px purple solid;
  padding: 40px;
  border-radius: 30px;
`;

const MoonPaper = () => {
  return (
    <Parallax
      blur={10}
      bgImage="/images/types/Firewide 1.png"
      bgImageAlt="the cat"
      strength={200}
    >
      Content goes here. Parallax height grows with content height.
    </Parallax>
  );
};

export default MoonPaper;
