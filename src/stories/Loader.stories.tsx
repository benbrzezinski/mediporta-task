import type { Meta, StoryObj } from "@storybook/react";
import Loader from "../components/Loader";

const meta = {
  component: Loader,
  title: "Loader",
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 40,
  },
};
