/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

const routesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoutes: builder.query({
      query: () => ({
        url: "/routes/",
        method: "GET",
      }),
      providesTags: [tags.routes],
    }),

    createRoute: builder.mutation({
      query: ({ data }) => ({
        url: "/routes/",
        method: "POST",
       data,
      }),
      invalidatesTags: [tags.routes],
    }),

    getRouteById: builder.query({
      query: (route_id) => ({
        url: `/routes/${route_id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, route_id) => [
        { type: "Routes", id: route_id },
      ],
    }),

    updateRoute: builder.mutation({
      query: ({ route_id, data }) => ({
        url: `/routes/${route_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tags.routes],
    }),

    deleteRoute: builder.mutation({
      query: (route_id) => ({
        url: `/routes/${route_id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tags.routes],
    }),

    uploadRouteImage: builder.mutation<
      any,
      { route_id: string | number; data: FormData }
    >({
      query: ({ route_id, data }) => ({
        url: `/routes/${route_id}/image`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.routes],
    }),
  }),
});

export const {
  useGetRoutesQuery,
  useCreateRouteMutation,
  useGetRouteByIdQuery,
  useUpdateRouteMutation,
  useDeleteRouteMutation,
  useUploadRouteImageMutation,
} = routesApi;
