import type { Meta, StoryObj } from "@storybook/react";
import Filters from "../components/Filters";

const meta = {
  component: Filters,
  title: "Filters",
} satisfies Meta<typeof Filters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    width: 288,
  },
};
