import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface Passenger {
  id: number;
  user_id: number;
  full_name: string;
  email: string;
  phone: string;
  passport_no?: string;
  nid_no?: string;
  nationality?: string;
  gender?: string;
  created_at: string;
}

export interface CreatePassengerPayload {
  full_name: string;
  email: string;
  phone?: string;
  passport_no?: string;
  nid_no?: string;
  date_of_birth?: string;
  nationality?: string;
  gender?: string;
}

export interface UpdatePassengerPayload {
  full_name?: string;
  phone?: string;
  passport_no?: string;
  nid_no?: string;
  date_of_birth?: string;
  nationality?: string;
  gender?: string;
}

export const passengerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPassengers: builder.query({
      query: () => ({
        url: "/passengers/",
        method: "GET",
      }),
      providesTags: [tags.passengers],
    }),

    getPassengerById: builder.query({
      query: (passenger_id) => ({
        url: `/passengers/${passenger_id}`,
        method: "GET",
      }),
      providesTags: [tags.passengers],
    }),

    createPassenger: builder.mutation({
      query: ({ data }) => ({
        url: "/passengers/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.passengers],
    }),

    updatePassenger: builder.mutation({
      query: ({ passenger_id, data }) => ({
        url: `/passengers/${passenger_id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.passengers],
    }),
  }),
});

export const {
  useGetPassengersQuery,
  useGetPassengerByIdQuery,
  useCreatePassengerMutation,
  useUpdatePassengerMutation,
} = passengerApi;
