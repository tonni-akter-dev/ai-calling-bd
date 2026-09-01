/* eslint-disable @typescript-eslint/no-explicit-any */

import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface FlightItem {
  trip_id: string | number;
  id?: string | number;
  airline: string;
  from_city: string;
  to_city: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  available_seats: number;
}

export interface FlightSearchPayload {
  from_city: string;
  to_city: string;
  departure_date: string;
  return_date?: string;
  airline?: string;
  min_price?: number;
  max_price?: number;
  page?: number;
  page_size?: number;
  sort_by?: string;
  sort_order?: "asc" | "desc";
}

export interface FlightSearchResponse {
  total: number;
  data: FlightItem[];
}

export const flightApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ==========================================
    // SEARCH FLIGHTS
    // ==========================================
    searchFlights: builder.mutation<FlightSearchResponse, FlightSearchPayload>({
      query: (payload) => ({
        url: "/flight-search/search", // note: baseApi likely has base URL like /api/v1
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tags.flights],
    }),

    // ==========================================
    // GET ALL FLIGHTS
    // ==========================================
    getAllFlights: builder.query<FlightItem[], void>({
      query: () => ({
        url: "/flights",
        method: "GET",
      }),

      transformResponse: (response: any) => {
        console.log("All Flights Response:", response);

        if (Array.isArray(response)) {
          return response;
        }

        return response?.data ?? response?.flights ?? response?.results ?? [];
      },

      providesTags: [tags.flights],
    }),
  }),

  overrideExisting: false,
});

export const { useSearchFlightsMutation, useGetAllFlightsQuery } = flightApi;
