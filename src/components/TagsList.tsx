import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import useTagsStore from "../store";
import getTags from "../api";
import Pagination from "./Pagination";
import Notification from "./Notification";
import Loader from "./Loader";

const TagsList = () => {
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const { tags, page, perPage, order, sortBy, setTags, setHasMore } =
    useTagsStore();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tags", { page, perPage, order, sortBy }],
    queryFn: () => getTags(page, perPage, order, sortBy),
  });

  useEffect(() => {
    if (data) {
      setTags(data.items);
      setHasMore(data.has_more);
    }
  }, [data, setTags, setHasMore]);

  useEffect(() => {
    if (tableContainerRef.current) tableContainerRef.current.scrollTo(0, 0);
  }, [page]);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Notification variant="error" text={String(error)} />;
  }

  return tags.length > 0 ? (
    <>
      <TableContainer
        style={{ maxHeight: "50dvh", overflowY: "auto" }}
        component={Paper}
        ref={tableContainerRef}
      >
        <Table style={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map(({ name, count }, i) => (
              <TableRow key={name}>
                <TableCell>{(page - 1) * Number(perPage) + i + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination />
    </>
  ) : (
    <Notification variant="info" text="No tags were found" />
  );
};

export default TagsList;
