import type { Meta, StoryObj } from "@storybook/react";
import Title from "../components/Title";

const meta = {
  component: Title,
  title: "Title",
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "Stack Overflow Tags",
  },
};
