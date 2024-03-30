import { Box, CircularProgress } from "@mui/material";

interface LoaderTypes {
  size?: number;
}

const Loader = ({ size = 40 }: LoaderTypes) => {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
