/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface Seat {
  id: number;
  trip_id: number;
  seat_number: string;
  seat_class: string;
  price: number;
  is_available: boolean;
  created_at: string;
}

export interface GetAvailableSeatsParams {
  trip_id: number | string;
  seat_class?: string;
}

export const seatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSeat: builder.mutation({
      query: ({ data }) => ({
        url: "/seats/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.seats, tags.trips],
    }),

    bulkCreateSeats: builder.mutation({
      query: ({ data }) => ({
        url: "/seats/bulk",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.seats, tags.trips],
    }),

    getSeatsByTrip: builder.query({
      query: (trip_id) => ({
        url: `/seats/trip/${trip_id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, trip_id) => [
        { type: tags.seats, id: `TRIP_${trip_id}` },
      ],
    }),

    // GET /api/v1/seats/trip/{trip_id}/available
    getAvailableSeatsByTrip: builder.query<Seat[], GetAvailableSeatsParams>({
      query: ({ trip_id, seat_class }) => ({
        url: `/seats/trip/${trip_id}/available`,
        method: "GET",
        params: seat_class ? { seat_class } : undefined,
      }),
      providesTags: (_result, _error, { trip_id }) => [
        { type: tags.seats, id: `AVAILABLE_TRIP_${trip_id}` },
      ],
    }),
  }),
});

export const {
  useCreateSeatMutation,
  useBulkCreateSeatsMutation,
  useGetSeatsByTripQuery,
  useGetAvailableSeatsByTripQuery,
} = seatsApi;
