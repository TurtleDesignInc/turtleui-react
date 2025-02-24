import { Button } from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline", "link", "ghost", "disabled"],
    },
    buttonColor: {
      control: "radio",
      options: ["primary", "black", "error"],
    },
    spacing: {
      control: "radio",
      options: ["default", "lg", "xl"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { variant: "solid", onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "solid",
    children: "Solid Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Disabled Button",
  },
};
