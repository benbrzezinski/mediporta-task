import type { Meta, StoryObj } from "@storybook/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Box } from "@mui/material";
import TagsList from "../components/TagsList";

const meta = {
  component: TagsList,
  title: "TagsList",
  decorators: [
    Story => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <Box display="flex" flexDirection="column" gap="40px">
            <Story />
          </Box>
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof TagsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
