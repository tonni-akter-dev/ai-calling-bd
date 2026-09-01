/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface Trip {
  id: number;
  route_id: number;
  flight_number: string;
  aircraft_name: string;
  departure_time: string;
  arrival_time: string;
  total_seats: number;
  available_seats: number;
  base_price: number;
  status: string;
  aircraft_image_url: string;
  created_at: string;
}

export interface CreateTripDTO {
  route_id: number;
  flight_number: string;
  aircraft_name: string;
  departure_time: string;
  arrival_time: string;
  total_seats: number;
  base_price: number;
}

export interface UpdateTripDTO {
  aircraft_name?: string;
  departure_time?: string;
  arrival_time?: string;
  base_price?: number;
  status?: string;
}

export interface SearchTripsParams {
  origin_code: string;
  destination_code: string;
  date?: string;
}

export const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<Trip[], void>({
      query: () => ({
        url: "/trips/",
        method: "GET",
      }),
      providesTags: [tags.trips],
    }),

    createTrip: builder.mutation({
      query: ({ data }) => ({
        url: "/trips/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.trips],
    }),

    searchTrips: builder.query<Trip[], SearchTripsParams>({
      query: (params) => ({
        url: "/trips/search",
        method: "GET",
        params,
      }),
      providesTags: [{ type: tags.trips, id: "SEARCH_LIST" }],
    }),

    getTripById: builder.query<Trip, number | string>({
      query: (trip_id) => ({
        url: `/trips/${trip_id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, trip_id) => [
        { type: tags.trips, id: trip_id },
      ],
    }),

    updateTrip: builder.mutation<
      Trip,
      { trip_id: number | string; data: UpdateTripDTO }
    >({
      query: ({ trip_id, data }) => ({
        url: `/trips/${trip_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { trip_id }) => [
        { type: tags.trips, id: trip_id },
        { type: tags.trips, id: "LIST" },
      ],
    }),

    cancelTrip: builder.mutation<string, number | string>({
      query: (trip_id) => ({
        url: `/trips/${trip_id}/cancel`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, trip_id) => [
        { type: tags.trips, id: trip_id },
        { type: tags.trips, id: "LIST" },
      ],
    }),

    uploadTripImage: builder.mutation<
      Trip,
      { trip_id: number | string; data: FormData }
    >({
      query: ({ trip_id, data }) => ({
        url: `/trips/${trip_id}/image`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (_result, _error, { trip_id }) => [
        { type: tags.trips, id: trip_id },
        { type: tags.trips, id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTripsQuery,
  useCreateTripMutation,
  useSearchTripsQuery,
  useGetTripByIdQuery,
  useUpdateTripMutation,
  useCancelTripMutation,
  useUploadTripImageMutation,
} = tripsApi;
