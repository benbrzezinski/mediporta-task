import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const Filters = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexWrap="wrap"
      gap="20px"
      marginBottom="30px"
    >
      <FormControl>
        <TextField
          id="perPage"
          name="perPage"
          type="number"
          label="Tags per page"
          inputMode="numeric"
          inputProps={{ min: 1 }}
        />
      </FormControl>
      <FormControl>
        <InputLabel id="sortByLabel">Sort by</InputLabel>
        <Select
          labelId="sortByLabel"
          name="sortBy"
          label="Sort by"
          value="popular"
        >
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="activity">Activity</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="orderLabel">Order</InputLabel>
        <Select labelId="orderLabel" name="order" label="Order" value="desc">
          <MenuItem value="desc">Descending</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
