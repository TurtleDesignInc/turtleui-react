import { HeadingText } from "@/components/ui/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundation/Typography/Heading",
  component: HeadingText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: "text",
    },
  },
  args: { level: "h1", children: "Your network" },
} satisfies Meta<typeof HeadingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    level: "h1",
    children: "Refer",
  },
};

export const Level2: Story = {
  args: {
    level: "h2",
  },
};

export const Level3: Story = {
  args: {
    level: "h3",
  },
};

export const Level4: Story = {
  args: {
    level: "h4",
  },
};

export const Level5: Story = {
  args: {
    level: "h5",
  },
};

export const Level6: Story = {
  args: {
    level: "h6",
  },
};
