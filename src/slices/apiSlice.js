import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { COMMENTS_URL } from "../constants";
import { ALBUMS_URL } from "../constants";
import { PHOTOS_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Users", "Posts", "Comments", "Albums", "Photos"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => COMMENTS_URL,
      providesTags: ["Comments"],
    }),
    getAlbums: builder.query({
      query: () => ALBUMS_URL,
      providesTags: ["Albums"],
    }),
    getPhotos: builder.query({
      query: () => PHOTOS_URL,
      providesTags: ["Photos"],
    }),
  }),
});

export const { useGetCommentsQuery, useGetAlbumsQuery, useGetPhotosQuery } =
  apiSlice;
