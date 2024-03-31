import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { SortBy, Order } from "../enums";
import useTagsStore from "../store";

interface FiltersTypes {
  width?: number;
}

const Filters = ({ width = 288 }: FiltersTypes) => {
  const DELAYED_VALUE = 1000;
  const { perPage, sortBy, order, setPerPage, setSortBy, setOrder } =
    useTagsStore();
  const [perPageInput, setPerPageInput] = useState(perPage);

  useEffect(() => {
    const delayedSetPerPageID = setTimeout(() => {
      setPerPage(perPageInput);
    }, DELAYED_VALUE);

    return () => clearTimeout(delayedSetPerPageID);
  }, [setPerPage, perPageInput]);

  return (
    <Box display="flex" flexWrap="wrap" gap="20px">
      <FormControl>
        <TextField
          style={{ width }}
          id="perPage"
          name="perPage"
          type="number"
          label="Tags per page"
          inputMode="numeric"
          inputProps={{ min: 1, max: 100 }}
          value={perPageInput}
          onChange={e => {
            const valueNumber = parseInt(e.target.value);
            const min = 1;
            const max = 100;

            if (isNaN(valueNumber)) {
              setPerPageInput("");
              return;
            }

            if (
              !isNaN(valueNumber) &&
              valueNumber >= min &&
              valueNumber <= max
            ) {
              setPerPageInput(String(valueNumber));
            }
          }}
        />
      </FormControl>
      <FormControl>
        <InputLabel id="sortByLabel">Sort by</InputLabel>
        <Select
          style={{ width }}
          labelId="sortByLabel"
          name="sortBy"
          label="Sort by"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortBy)}
        >
          <MenuItem value={SortBy.Popular}>Popular</MenuItem>
          <MenuItem value={SortBy.Name}>Name</MenuItem>
          <MenuItem value={SortBy.Activity}>Activity</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="orderLabel">Order</InputLabel>
        <Select
          style={{ width }}
          labelId="orderLabel"
          name="order"
          label="Order"
          value={order}
          onChange={e => setOrder(e.target.value as Order)}
        >
          <MenuItem value={Order.Descending}>Descending</MenuItem>
          <MenuItem value={Order.Ascending}>Ascending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
