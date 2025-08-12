import API from "@/configs/API";
import { customFetch } from "@/lib/customFetch";

async function getBlogPost({
  pageIndex,
  pageSize,
  applicationFilter,
}: {
  pageIndex: number;
  pageSize: number;
  applicationFilter: string;
}) {
  const response = await customFetch(
    `${API.BLOG.GET}?pagination.page=${pageIndex}&pagination.pageSize=${pageSize}&applicationFilter=${applicationFilter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (response.status !== 200) {
    throw {
      code: data?.code,
      message: data?.error ? data?.error : data?.message,
    };
  }

  return data ? data?.blogs : [];
}

export default Object.freeze({
  getBlogPost,
});
