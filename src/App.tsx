import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useCustomTheme from "./theme";
import Home from "./pages/Home";

const App = () => {
  const queryClient = new QueryClient();
  const theme = useCustomTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
