import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios/axiosBaseQuery";
import { tagsArray } from "./tags";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `https://airplane.ictbangladesh.bd/api/v1`,
  }),

  tagTypes: tagsArray,
  endpoints: () => ({}),
  
});

export default baseApi;
