import { baseApi } from "./baseApi";

const feedBacksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // 1. Get all feedbacks (unfiltered)
    getAllFeedbacks: build.query({
      query: () => ({
        url: `/reviews`,
        method: "GET",
      }),
      providesTags: ["reviews", "feedbacks"], // Tags for cache invalidation
    }),

    // 2. Get only published feedbacks
getPublishedFeedback: build.query({
  query: () => ({
    url: `/reviews/published`,
    method: "GET",
  }),
}),


    // 3. Create a new feedback
    createFeedback: build.mutation({
      query: (newFeedback) => ({
        url: `/reviews`,
        method: "POST",
        body: newFeedback,
      }),
      invalidatesTags: ["feedbacks"],
    }),

    // 4. Toggle feedback status (published/unpublished)
    updateFeedbackStatus: build.mutation({
      query: (id: string) => ({
        url: `/reviews`,
        method: "PATCH",
        body: { id },
      }),
      invalidatesTags: ["feedbacks"],
    }),

    // 5. Delete feedback by ID
    deleteFeedbackStatus: build.mutation({
      query: (id: string) => ({
        url: `/reviews`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["feedbacks"],
    }),
  }),
});

export const {
  useGetAllFeedbacksQuery,
  useGetPublishedFeedbackQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackStatusMutation,
  useDeleteFeedbackStatusMutation,
} = feedBacksApi;
