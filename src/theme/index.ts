import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const useCustomTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: { main: teal[500] },
        },
      }),
    [prefersDarkMode]
  );

  return theme;
};

export default useCustomTheme;
