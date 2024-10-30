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
    getApiTicketGetTicketsOfHelpdesk: build.query<
      GetApiTicketGetTicketsOfHelpdeskApiResponse,
      GetApiTicketGetTicketsOfHelpdeskApiArg
    >({
      query: () => ({ url: `/api/Ticket/GetTicketsOfHelpdesk` }),
    }),
    getApiTicketGetAllTicketForAdmin: build.query<
      GetApiTicketGetAllTicketForAdminApiResponse,
      GetApiTicketGetAllTicketForAdminApiArg
    >({
      query: () => ({ url: `/api/Ticket/GetAllTicketForAdmin` }),
    }),
    postApiTicketAssignTicketToMe: build.mutation<
      PostApiTicketAssignTicketToMeApiResponse,
      PostApiTicketAssignTicketToMeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/AssignTicketToMe`,
        method: "POST",
        params: {
          ticketId: queryArg.ticketId,
        },
      }),
    }),
    postApiTicketAssignTicketToHelpdesk: build.mutation<
      PostApiTicketAssignTicketToHelpdeskApiResponse,
      PostApiTicketAssignTicketToHelpdeskApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/AssignTicketToHelpdesk`,
        method: "POST",
        params: {
          ticketId: queryArg.ticketId,
          assignToUserId: queryArg.assignToUserId,
        },
      }),
    }),
    getApiTicketGetTicketsOfUser: build.query<
      GetApiTicketGetTicketsOfUserApiResponse,
      GetApiTicketGetTicketsOfUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/GetTicketsOfUser`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    postApiTicketCreateTicket: build.mutation<
      PostApiTicketCreateTicketApiResponse,
      PostApiTicketCreateTicketApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/CreateTicket`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    putApiTicketUpdateTicket: build.mutation<
      PutApiTicketUpdateTicketApiResponse,
      PutApiTicketUpdateTicketApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/UpdateTicket`,
        method: "PUT",
        body: queryArg.updateTicketRequestModel,
      }),
    }),
    getApiTicketGetTicketById: build.query<
      GetApiTicketGetTicketByIdApiResponse,
      GetApiTicketGetTicketByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/GetTicketById`,
        params: {
          ticketId: queryArg.ticketId,
        },
      }),
    }),
    deleteApiTicketDeleteTicket: build.mutation<
      DeleteApiTicketDeleteTicketApiResponse,
      DeleteApiTicketDeleteTicketApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Ticket/DeleteTicket`,
        method: "DELETE",
        params: {
          id: queryArg.id,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedTicket };
export type PostApiCommentAddCommentToTicketApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiCommentAddCommentToTicketApiArg = {
  addCommentToTicketRequestModel: AddCommentToTicketRequestModel;
};
export type GetApiTicketGetTicketsOfHelpdeskApiResponse =
  /** status 200 OK */ HelpdeskTicketsTableViewModelListIDataResultRead;
export type GetApiTicketGetTicketsOfHelpdeskApiArg = void;
export type GetApiTicketGetAllTicketForAdminApiResponse =
  /** status 200 OK */ AdminPanelTicketsTableViewModelListIDataResultRead;
export type GetApiTicketGetAllTicketForAdminApiArg = void;
export type PostApiTicketAssignTicketToMeApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiTicketAssignTicketToMeApiArg = {
  ticketId?: number;
};
export type PostApiTicketAssignTicketToHelpdeskApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiTicketAssignTicketToHelpdeskApiArg = {
  ticketId?: number;
  assignToUserId?: string;
};
export type GetApiTicketGetTicketsOfUserApiResponse =
  /** status 200 OK */ TicketViewModelListIDataResultRead;
export type GetApiTicketGetTicketsOfUserApiArg = {
  id?: number;
};
export type PostApiTicketCreateTicketApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiTicketCreateTicketApiArg = {
  body: {
    Title?: string;
    Content?: string;
    CategoryId?: number;
    CreatorId?: number;
    Files?: Blob[];
  };
};
export type PutApiTicketUpdateTicketApiResponse =
  /** status 200 OK */ TicketViewModelIDataResultRead;
export type PutApiTicketUpdateTicketApiArg = {
  updateTicketRequestModel: UpdateTicketRequestModel;
};
export type GetApiTicketGetTicketByIdApiResponse =
  /** status 200 OK */ TicketViewModelIDataResultRead;
export type GetApiTicketGetTicketByIdApiArg = {
  ticketId?: number;
};
export type DeleteApiTicketDeleteTicketApiResponse =
  /** status 200 OK */ IResultRead;
export type DeleteApiTicketDeleteTicketApiArg = {
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
export type HelpdeskTicketsTableViewModelListIDataResult = {};
export type CategoryViewModel = {
  id?: number;
  name?: string | null;
};
export type CreatorViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
};
export type HelpdeskTicketsTableViewModel = {
  id?: number;
  title?: string | null;
  content?: string | null;
  category?: CategoryViewModel;
  status?: string | null;
  creator?: CreatorViewModel;
  createdAt?: string;
};
export type HelpdeskTicketsTableViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: HelpdeskTicketsTableViewModel[] | null;
};
export type AdminPanelTicketsTableViewModelListIDataResult = {};
export type RoleViewModel = {
  name?: string | null;
};
export type HelpdeskViewModel = {
  id?: number;
  fullName?: string | null;
  role?: RoleViewModel;
};
export type AdminPanelTicketsTableViewModel = {
  id?: number;
  title?: string | null;
  content?: string | null;
  category?: CategoryViewModel;
  status?: string | null;
  assignedTo?: HelpdeskViewModel;
  creator?: CreatorViewModel;
  createdAt?: string;
};
export type AdminPanelTicketsTableViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: AdminPanelTicketsTableViewModel[] | null;
};
export type TicketViewModelListIDataResult = {};
export type UserViewModel = {
  id?: number;
  fullName?: string | null;
  userName?: string | null;
};
export type CommentViewModel = {
  id?: number;
  message?: string | null;
  creator?: UserViewModel;
  createdAt?: string;
};
export type LogActivityViewModel = {
  id?: number;
  description?: string | null;
  createdAt?: string;
};
export type TicketViewModel = {
  id?: number;
  title?: string | null;
  content?: string | null;
  status?: string | null;
  assignedTo?: HelpdeskViewModel;
  category?: CategoryViewModel;
  creator?: UserViewModel;
  comments?: CommentViewModel[] | null;
  activities?: LogActivityViewModel[] | null;
  createdAt?: string;
};
export type TicketViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: TicketViewModel[] | null;
};
export type TicketViewModelIDataResult = {
  data?: TicketViewModel;
};
export type TicketViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: TicketViewModel;
};
export type UpdateTicketRequestModel = {
  id?: number;
  title?: string | null;
  content?: string | null;
  status?: string | null;
  categoryId?: number;
};
