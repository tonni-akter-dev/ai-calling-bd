import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios/axiosBaseQuery";
import { tagsArray } from "./tags";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),

  tagTypes: tagsArray,
  endpoints: () => ({}),
  
});

export default baseApi;
