import { baseApi } from "./baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllContacts: build.query({
      query: () => ({
        url: `/contacts`,
        method: "GET",
      }),
      providesTags: ["contacts"],
    }),
    createContact: build.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
} = contactsApi;
