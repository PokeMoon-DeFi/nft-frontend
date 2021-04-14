import { Story, Meta } from "@storybook/react";
import InfoBox from "./index";

export default {
  title: "InfoBox",
  component: InfoBox,
} as Meta;

export const Basic: Story = () => <InfoBox />;
