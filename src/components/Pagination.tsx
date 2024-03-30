import { Box, ButtonGroup, Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { TagsListTypes } from "../types";
import useTagsStore from "../store";

const Pagination = ({ variant = "paper" }: TagsListTypes) => {
  const { page, hasMore, setPage } = useTagsStore();

  const scrollUp = () => {
    window.scrollBy({ top: -100, behavior: "smooth" });
  };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup
        variant={variant === "paper" ? "contained" : "text"}
        aria-label="pagination"
      >
        <Button
          onClick={() => {
            scrollUp();
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          <ArrowBackIosNew fontSize="inherit" />
        </Button>
        <Button
          onClick={() => {
            scrollUp();
          }}
        >
          {page}
        </Button>
        <Button
          onClick={() => {
            scrollUp();
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
