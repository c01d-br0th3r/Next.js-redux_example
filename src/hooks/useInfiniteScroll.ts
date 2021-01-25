import axios from "axios";
import { useSWRInfinite } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const baseUrl = "https://jsonplaceholder.typicode.com";

export const useInfiniteScroll = (path: string) => {
  const url = baseUrl + path;
  const PAGE_LIMIT = 10;
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${url}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher
  );
  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { posts, error, isLoadingMore, isReachingEnd, size, setSize };
};
