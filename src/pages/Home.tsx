import { Box } from "@mui/material";
import Title from "../components/Title";
import Filters from "../components/Filters";
import TagsList from "../components/TagsList";

const Home = () => {
  return (
    <>
      <Title />
      <Box display="flex" flexDirection="column" gap="40px">
        <Filters />
        <TagsList />
      </Box>
    </>
  );
};

export default Home;
