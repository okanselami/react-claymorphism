import React from "react";
import Claymorphism from "../claymorphism";
import { Meta } from "@storybook/react";
import "./styles.css";

/**
 * Setup
 */
export default {
  title: "Components/claymorphism",
  component: Claymorphism,
  argTypes: {},
  parameters: {
    docs: {
      source: {
        state: "open",
      },
    },
  },
} as Meta;

const Template = (args) => (
  <Claymorphism className="card" clayBackgroundColor="white" {...args} />
);

/**
 * Default
 */
export const Default = Template.bind({});

Default.args = {
  children: "Claymorphism UI",
};
