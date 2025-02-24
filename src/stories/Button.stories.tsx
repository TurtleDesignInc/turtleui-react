import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

/**
 * The primary element for UI interaction.
 */
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=51-82&t=92EqeaPkHSKdxZcY-1",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondayr", "link"],
    },
  },
  args: {
    variant: "primary",
    children: "Button",
    onClick: fn(),
  },
  // render: ({ leftIcon, rightIcon, ...args }) => (
  //   <Button leftIcon={leftIcon ? <></> : null} {...args} />
  // ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
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
