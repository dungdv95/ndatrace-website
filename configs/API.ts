export const API_ROOT = process.env.NEXT_PUBLIC_BLOG_API;

const API = {
  BLOG: {
    GET: `${API_ROOT}/blogs`,
    CATEGORY: `${API_ROOT}/categories`,
  },
};

export default API;
