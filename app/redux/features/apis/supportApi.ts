/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../../baseApi";
import { tags } from "../../tags";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // =========================
    // GET TICKET STATS
    // =========================
    getTicketStats: builder.query({
      query: () => ({
        url: "/tickets/stats",
        method: "GET",
      }),
      providesTags: [tags.tickets],
    }),

    // =========================
    // GET TICKETS
    // =========================
    getTickets: builder.query({
      query: ({
        search = "",
        category = "",
        status = "",
        page = 1,
        limit = 10,
      }) => ({
        url: "/tickets",
        method: "GET",
        params: {
          search,
          category,
          status,
          page,
          limit,
        },
      }),
      providesTags: [tags.tickets],
    }),

    // =========================
    // CREATE TICKET
    // =========================
   createTicket: builder.mutation({
  query: (data) => ({
    url: "/tickets",
    method: "POST",
    data,
  }),
  invalidatesTags: ["Tickets"],
}),
  }),
});

export const {
  useGetTicketStatsQuery,
  useGetTicketsQuery,
  useCreateTicketMutation,
} = api;
