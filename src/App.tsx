import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import Filters from "./components/Filters";
import TagsList from "./components/TagsList";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Title text="Stack Overflow Tags" />
        <Box display="flex" flexDirection="column" gap="40px">
          <Filters />
          <TagsList />
        </Box>
      </Container>
    </QueryClientProvider>
  );
};

export default App;
