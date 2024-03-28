import axios, { AxiosResponse } from "axios";
import { Tag } from "../types";
import { SortBy, Order } from "../enums";

interface TagsApiRes {
  items: Tag[];
  has_more: boolean;
}

const getTags = async (
  page: number,
  perPage: string,
  order: Order,
  sortBy: SortBy
) => {
  try {
    const res: AxiosResponse<TagsApiRes> = await axios.get(
      "https://api.stackexchange.com/2.3/tags",
      {
        params: {
          page,
          pagesize: perPage || "0",
          order: order.toLocaleLowerCase(),
          sort: sortBy.toLocaleLowerCase(),
          site: "stackoverflow",
        },
      }
    );

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message);
    } else {
      throw new Error("Unexpected error occurred, please try again later");
    }
  }
};

export default getTags;
