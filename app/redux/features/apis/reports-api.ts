/* eslint-disable @typescript-eslint/no-unused-expressions */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface RevenueReport {
  total_revenue: number;
  currency?: string;
  monthly_breakdown?: { month: string; amount: number }[];
  [key: string]: unknown;
}

export interface BookingsSummaryReport {
  total_bookings: number;
  confirmed_bookings: number;
  pending_bookings: number;
  cancelled_bookings: number;
  [key: string]: unknown;
}

export interface TripOccupancyReport {
  trip_id: number;
  flight_number: string;
  total_seats: number;
  occupied_seats: number;
  occupancy_rate: number;
}
[];

export interface CancellationReport {
  total_cancellations: number;
  total_refunded_amount: number;
  pending_refunds: number;
  [key: string]: unknown;
}

export const reportsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRevenueReport: builder.query<RevenueReport, void>({
      query: () => ({
        url: "/reports/revenue",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getBookingsSummary: builder.query<BookingsSummaryReport, void>({
      query: () => ({
        url: "/reports/bookings-summary",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getTripOccupancy: builder.query<TripOccupancyReport[], void>({
      query: () => ({
        url: "/reports/trip-occupancy",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),

    getCancellationReport: builder.query<CancellationReport, void>({
      query: () => ({
        url: "/reports/cancellations",
        method: "GET",
      }),
      providesTags: [tags.bookings],
    }),
  }),
});

export const {
  useGetRevenueReportQuery,
  useGetBookingsSummaryQuery,
  useGetTripOccupancyQuery,
  useGetCancellationReportQuery,
} = reportsApi;
