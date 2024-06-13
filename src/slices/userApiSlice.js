import {USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ["Users"],
      keepUnusedDataFor: 5,
    }),

    getUserDetails: builder.query({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
   
    deleteUser: builder.mutation({
       query:(userId) => ({
        url:`${USERS_URL}/${userId}`,
        method: "DELETE"
       }),
    }),


  
  }),
});


export const {
  useGetUsersQuery,
  // useGetUserDetailsQuery,
  // useCreateUserMutation,
  // useDeleteUserMutation,
  // useUpdateUserMutation
} = userApiSlice;
