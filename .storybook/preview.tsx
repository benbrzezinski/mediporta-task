import React from "react";
import type { Preview } from "@storybook/react";
import { Container, CssBaseline } from "@mui/material";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <Container>
        <CssBaseline />
        <Story />
      </Container>
    ),
  ],
};

export default preview;
