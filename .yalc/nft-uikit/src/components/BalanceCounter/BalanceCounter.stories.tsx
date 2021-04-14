import React from "react";
import { Story, Meta } from "@storybook/react";

import BalanceCounter from "./index";

export default {
  title: "Example/BalanceCounter",
  component: BalanceCounter,
  decorators: [],
} as Meta;

export const Counter: Story = () => (
  <div
    style={{
      backgroundColor: "#C8C8C8",
      display: "flex",
      flex: 1,
      height: "200px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BalanceCounter imgUrl="images/MAXRBALL.png" balance={2058.19} />
  </div>
);
