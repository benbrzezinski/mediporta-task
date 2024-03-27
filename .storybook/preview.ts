import type { Preview } from "@storybook/react";
import { CssBaseline } from "@mui/material";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  {
    GlobalStyles: CssBaseline,
  },
];

export default preview;
