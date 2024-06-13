import { POST_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const PostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: `${POST_URL}`,
      }),
      providesTags: ["Posts"],
      keepUnusedDataFor: 5,
    }),

    getPostDetails: builder.query({
      query: (PostId) => ({
        url: `${POST_URL}/${PostId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createPost: builder.mutation({
      query: () => ({
        url: `${POST_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `${POST_URL}/${data.PostId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),

    deletePost: builder.mutation({
      query: (PostId) => ({
        url: `${POST_URL}/${PostId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  // useGetPostDetailsQuery,
  // useCreatePostMutation,
  // useDeletePostMutation,
  // useUpdatePostMutation
} = PostApiSlice;
