import React from "react";
import { Story, Meta } from "@storybook/react";
import Flex, { FlexProps } from "../Flex/";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Example/Flex",
  component: Flex,
  decorators: [withDesign],
} as Meta;

export const Template: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <p>This is text</p>
  </Flex>
);

Template.args = {
  width: 300,
  height: 100,
};
