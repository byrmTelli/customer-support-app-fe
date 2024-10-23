import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiCommentAddCommentToTicket: build.mutation<
      PostApiCommentAddCommentToTicketApiResponse,
      PostApiCommentAddCommentToTicketApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Comment/AddCommentToTicket`,
        method: "POST",
        body: queryArg.addCommentToTicketRequestModel,
      }),
    }),
    putApiCommentUpdateComment: build.mutation<
      PutApiCommentUpdateCommentApiResponse,
      PutApiCommentUpdateCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Comment/UpdateComment`,
        method: "PUT",
        body: queryArg.updateCommentRequestModel,
      }),
    }),
    deleteApiCommentDeleteComment: build.mutation<
      DeleteApiCommentDeleteCommentApiResponse,
      DeleteApiCommentDeleteCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Comment/DeleteComment`,
        method: "DELETE",
        params: {
          id: queryArg.id,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedComment };
export type PostApiCommentAddCommentToTicketApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiCommentAddCommentToTicketApiArg = {
  addCommentToTicketRequestModel: AddCommentToTicketRequestModel;
};
export type PutApiCommentUpdateCommentApiResponse =
  /** status 200 OK */ IResultRead;
export type PutApiCommentUpdateCommentApiArg = {
  updateCommentRequestModel: UpdateCommentRequestModel;
};
export type DeleteApiCommentDeleteCommentApiResponse =
  /** status 200 OK */ IResultRead;
export type DeleteApiCommentDeleteCommentApiArg = {
  id?: number;
};
export type IResult = {};
export type IResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
};
export type AddCommentToTicketRequestModel = {
  ticketId?: number;
  message?: string | null;
  creatorId?: number;
};
export type UpdateCommentRequestModel = {
  id?: number;
  message?: string | null;
};
