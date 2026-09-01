import baseApi from "../../baseApi";
import { tags } from "../../tags";

export interface Counter {
  id: number;
  airport_code: string;
  counter_name: string;
  counter_type: string;
  agent_id: number | null;
  is_active: boolean;
  created_at: string;
}

export interface CreateCounterPayload {
  airport_code: string;
  counter_name: string;
  counter_type?: string; // Default e.g. "check-in"
  agent_id?: number | null;
}

export interface UpdateCounterPayload {
  counter_name?: string;
  counter_type?: string;
  agent_id?: number | null;
  is_active?: boolean;
}

export const counterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCounters: builder.query<Counter[], void>({
      query: () => ({
        url: "/counters/",
        method: "GET",
      }),
      providesTags: [tags.counters],
    }),

    getCounterById: builder.query<Counter, number>({
      query: (counter_id) => ({
        url: `/counters/${counter_id}`,
        method: "GET",
      }),
      providesTags: [tags.counters],
    }),

    createCounter: builder.mutation<Counter, { data: CreateCounterPayload }>({
      query: ({ data }) => ({
        url: "/counters/",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.counters],
    }),

    updateCounter: builder.mutation<
      Counter,
      { counter_id: number; data: UpdateCounterPayload }
    >({
      query: ({ counter_id, data }) => ({
        url: `/counters/${counter_id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.counters],
    }),

    assignAgentToCounter: builder.mutation<
      Counter,
      { counter_id: number; agent_id: number }
    >({
      query: ({ counter_id, agent_id }) => ({
        url: `/counters/${counter_id}/assign-agent/${agent_id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tags.counters],
    }),
  }),
});

export const {
  useGetCountersQuery,
  useGetCounterByIdQuery,
  useCreateCounterMutation,
  useUpdateCounterMutation,
  useAssignAgentToCounterMutation,
} = counterApi;