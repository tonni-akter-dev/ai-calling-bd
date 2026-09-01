/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

const checkinsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckin: builder.mutation({
      query: ({ data }) => ({
        url: "/checkins/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.checkins],
    }),

    getCheckins: builder.query({
      query: (params) => ({
        url: "/checkins/",
        method: "GET",
        params: params?.trip_id ? { trip_id: params.trip_id } : undefined,
      }),
      providesTags: [tags.checkins],
    }),

    getCheckinByBooking: builder.query({
      query: (booking_id) => ({
        url: `/checkins/booking/${booking_id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, booking_id) => [
        { type: "Checkins", id: `BOOKING_${booking_id}` },
      ],
    }),

    getBoardingPass: builder.query({
      query: (checkin_id) => ({
        url: `/checkins/${checkin_id}/boarding-pass`,
        method: "GET",
        responseHandler: (response:any) => response.blob(),
      }),
    }),


  }),
});

export const {
  useCreateCheckinMutation,
  useGetCheckinsQuery,
  useGetCheckinByBookingQuery,
  useGetBoardingPassQuery,
  useLazyGetBoardingPassQuery,
} = checkinsApi;
