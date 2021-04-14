import Carousel from "./index";
import Card from "../Card";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

export const Basic: Story = () => <Carousel />;
