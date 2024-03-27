import { Box, ButtonGroup, Button } from "@mui/material";

const Pagination = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup variant="contained" aria-label="pagination">
        <Button>{"<"}</Button>
        <Button>1</Button>
        <Button>{">"}</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
