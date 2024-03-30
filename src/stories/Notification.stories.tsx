import type { Meta, StoryObj } from "@storybook/react";
import Notification from "../components/Notification";

const meta = {
  component: Notification,
  title: "Notification",
  argTypes: {
    type: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof Notification>;

export const Success: Story = {
  args: {
    type: "success",
    text: "Success",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    text: "Info",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "Warning",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    text: "Error",
  },
};
