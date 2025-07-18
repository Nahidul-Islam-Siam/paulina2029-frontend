import { baseApi } from "./baseApi";

type Admin = {
  _id?: string;
  email: string;
  name?: string;
  password: string;
};

type LoginResponse = {
  status: number;
  message: string;
  token: string;
  data: Admin;
};

const authAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminLogin: build.mutation<LoginResponse, Admin>({
      query: (auth) => {
        return {
          url: `/signIn`, // Adjust the URL if needed
          method: "POST", // Use POST method for creating feedback
          body: auth, // Send the new feedback object in the request body
        };
      },
      invalidatesTags: ["Auth"], // Invalidate the cache for Subscriber
    }),
  }),
});

export const { useAdminLoginMutation } = authAPi;
