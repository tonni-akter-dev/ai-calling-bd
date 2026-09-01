import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface Booking {
  id: number;
  pnr_code: string;
  trip_id: number;
  passenger_id: number;
  seat_id: number;
  booked_by: number;
  total_price: number;
  status: string;
  created_at: string;
}

export interface CreateBookingPayload {
  trip_id: number;
  passenger_id: number;
  seat_id: number;
}

export interface Cancellation {
  id: number;
  booking_id: number;
  reason: string;
  refund_amount: number;
  refund_status: string;
  cancelled_at: string;
}

export interface CreateCancellationPayload {
  booking_id: number;
  reason: string;
}

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query<Booking[], void>({
      query: () => ({
        url: "/bookings/",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getMyBookings: builder.query<Booking[], void>({
      query: () => ({
        url: "/bookings/my",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getBookingByPnr: builder.query<Booking, string>({
      query: (pnr) => ({
        url: `/bookings/pnr/${pnr}`,
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getBookingById: builder.query<Booking, number>({
      query: (booking_id) => ({
        url: `/bookings/${booking_id}`,
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getETicket: builder.query<string, number>({
      query: (booking_id) => ({
        url: `/bookings/${booking_id}/e-ticket`,
        method: "GET",
      }),
    }),

    createBooking: builder.mutation<Booking, { data: CreateBookingPayload }>({
      query: ({ data }) => ({
        url: "/bookings/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.bookings],
    }),

    // --- Cancellations Endpoints ---

    getAllCancellations: builder.query<Cancellation[], void>({
      query: () => ({
        url: "/cancellations/",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getCancellationByBookingId: builder.query<Cancellation, number>({
      query: (booking_id) => ({
        url: `/cancellations/booking/${booking_id}`,
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    createCancellation: builder.mutation<Cancellation, { data: CreateCancellationPayload }>({
      query: ({ data }) => ({
        url: "/cancellations/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.bookings],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
  useGetBookingByPnrQuery,
  useGetBookingByIdQuery,
  useLazyGetETicketQuery,
  useCreateBookingMutation,
  // Cancellations Hooks
  useGetAllCancellationsQuery,
  useGetCancellationByBookingIdQuery,
  useLazyGetCancellationByBookingIdQuery,
  useCreateCancellationMutation,
} = bookingApi;