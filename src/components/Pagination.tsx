import { Box, ButtonGroup, Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import useTagsStore from "../store";

const Pagination = () => {
  const { page, hasMore, setPage } = useTagsStore();

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup variant="contained" aria-label="pagination">
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          <ArrowBackIosNew fontSize="inherit" />
        </Button>
        <Button>{page}</Button>
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setPage(page + 1);
          }}
          disabled={!hasMore}
        >
          <ArrowForwardIos fontSize="inherit" />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
