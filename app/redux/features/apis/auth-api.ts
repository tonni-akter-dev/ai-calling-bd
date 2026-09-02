import baseApi from "../../baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        data,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    login: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),

    logout: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/logout",
        method: "POST",
        data,
      }),
    }),

  
  }),
});

export const {
  useRegisterMutation,
  useGetMeQuery,
  useGetAllUsersQuery,
  useLoginMutation,
  useLogoutMutation,
} = api;
