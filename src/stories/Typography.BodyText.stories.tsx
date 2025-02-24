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
    size: {
      control: "radio",
      options: ["normal", "small", "caption"],
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
    size: "normal",
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
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=50-437&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=50-437&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Caption: Story = {
  args: {
    size: "caption",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=50-431&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=50-436&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Link: Story = {
  args: {
    link: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=50-435&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};
