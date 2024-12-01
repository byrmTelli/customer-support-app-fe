import { generatedComment } from "../generated/generatedApiComment";

export const apiComment = generatedComment.enhanceEndpoints({
  addTagTypes: ["DeleteComment", "GetTicketById"],
  endpoints: {
    deleteApiCommentDeleteComment: {
      invalidatesTags: ["GetTicketById"],
    },
  },
});
