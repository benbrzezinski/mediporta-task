import { Container } from "@mui/material";
import Title from "./Title";
import Filters from "./Filters";
import TagsList from "./TagsList";
import Pagination from "./Pagination";

const App = () => {
  return (
    <Container>
      <Title title="Stack Overflow Tags" />
      <Filters />
      <TagsList />
      <Pagination />
    </Container>
  );
};

export default App;
