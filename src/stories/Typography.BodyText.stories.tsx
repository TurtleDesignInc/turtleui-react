import { BodyText } from "@/components/ui/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Typography/Body",
  component: BodyText,
  tags: ["autodocs"],
  argTypes: {
    weight: {
      control: "radio",
      options: ["normal", "bold"],
    },
    link: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    weight: "normal",
    link: false,
    children:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. ",
  },
} satisfies Meta<typeof BodyText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: "normal",
  },
};
export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Caption: Story = {
  args: {
    size: "caption",
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
  },
};

export const Link: Story = {
  args: {
    link: true,
  },
};
