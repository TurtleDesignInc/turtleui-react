import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withActions } from "@storybook/addon-actions/decorator";
import { InfoIcon } from "@/components/ui/icons/InfoIcon";

/**
 * The primary element for UI interaction.
 */
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "link"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    leftIcon: {
      control: "boolean",
    },
    rightIcon: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    children: "Button",
    disabled: false,
    loading: false,
    leftIcon: undefined,
    rightIcon: undefined,
    onClick: fn(),
  },
  decorators: [withActions],
  render: ({ leftIcon, rightIcon, ...args }) => {
    return (
      <Button
        leftIcon={leftIcon ? InfoIcon : undefined}
        rightIcon={rightIcon ? InfoIcon : undefined}
        {...args}
      />
    );
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=55-244&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=68-96&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=163-110&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=163-111&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=55-243&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    loading: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ehv3QAHu3JKCcAC46wSh8z/Foundation-File?node-id=55-242&t=zXV3M5qRVXPj8wvQ-4",
    },
  },
};
