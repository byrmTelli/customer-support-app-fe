import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiAdminGetRoles: build.query<
      GetApiAdminGetRolesApiResponse,
      GetApiAdminGetRolesApiArg
    >({
      query: () => ({ url: `/api/Admin/GetRoles` }),
    }),
    postApiAdminAssignRoleToUser: build.mutation<
      PostApiAdminAssignRoleToUserApiResponse,
      PostApiAdminAssignRoleToUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Admin/AssignRoleToUser`,
        method: "POST",
        params: {
          UserId: queryArg.userId,
          RoleId: queryArg.roleId,
        },
      }),
    }),
    getApiAdminGetCategoriesPageStatistics: build.query<
      GetApiAdminGetCategoriesPageStatisticsApiResponse,
      GetApiAdminGetCategoriesPageStatisticsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Admin/GetCategoriesPageStatistics`,
        params: {
          categoryId: queryArg.categoryId,
        },
      }),
    }),
    getApiAdminGetDashboardStats: build.query<
      GetApiAdminGetDashboardStatsApiResponse,
      GetApiAdminGetDashboardStatsApiArg
    >({
      query: () => ({ url: `/api/Admin/GetDashboardStats` }),
    }),
    getApiTicketGetAllTicketForAdmin: build.query<
      GetApiTicketGetAllTicketForAdminApiResponse,
      GetApiTicketGetAllTicketForAdminApiArg
    >({
      query: () => ({ url: `/api/Ticket/GetAllTicketForAdmin` }),
    }),
    getApiUserGetUserProfileForAdminPanel: build.query<
      GetApiUserGetUserProfileForAdminPanelApiResponse,
      GetApiUserGetUserProfileForAdminPanelApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/GetUserProfileForAdminPanel`,
        params: {
          id: queryArg.id,
        },
      }),
    }),
    getApiUserGetCustomerProfileListForAdminPanel: build.query<
      GetApiUserGetCustomerProfileListForAdminPanelApiResponse,
      GetApiUserGetCustomerProfileListForAdminPanelApiArg
    >({
      query: () => ({ url: `/api/User/GetCustomerProfileListForAdminPanel` }),
    }),
    getApiUserGetHeldesksProfileListForAdminPanel: build.query<
      GetApiUserGetHeldesksProfileListForAdminPanelApiResponse,
      GetApiUserGetHeldesksProfileListForAdminPanelApiArg
    >({
      query: () => ({ url: `/api/User/GetHeldesksProfileListForAdminPanel` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedAdmin };
export type GetApiAdminGetRolesApiResponse =
  /** status 200 OK */ AssignRoleViewModelListIDataResultRead;
export type GetApiAdminGetRolesApiArg = void;
export type PostApiAdminAssignRoleToUserApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiAdminAssignRoleToUserApiArg = {
  userId?: number;
  roleId?: number;
};
export type GetApiAdminGetCategoriesPageStatisticsApiResponse =
  /** status 200 OK */ CategoriesPageViewModelIDataResultRead;
export type GetApiAdminGetCategoriesPageStatisticsApiArg = {
  categoryId?: number;
};
export type GetApiAdminGetDashboardStatsApiResponse =
  /** status 200 OK */ DashboardViewModelIDataResultRead;
export type GetApiAdminGetDashboardStatsApiArg = void;
export type GetApiTicketGetAllTicketForAdminApiResponse =
  /** status 200 OK */ AdminPanelTicketsTableViewModelListIDataResultRead;
export type GetApiTicketGetAllTicketForAdminApiArg = void;
export type GetApiUserGetUserProfileForAdminPanelApiResponse =
  /** status 200 OK */ UserProfileForAdminPanelViewModelIDataResultRead;
export type GetApiUserGetUserProfileForAdminPanelApiArg = {
  id?: number;
};
export type GetApiUserGetCustomerProfileListForAdminPanelApiResponse =
  /** status 200 OK */ CustomerProfileViewModelListIDataResultRead;
export type GetApiUserGetCustomerProfileListForAdminPanelApiArg = void;
export type GetApiUserGetHeldesksProfileListForAdminPanelApiResponse =
  /** status 200 OK */ UserProfileViewModelListIDataResultRead;
export type GetApiUserGetHeldesksProfileListForAdminPanelApiArg = void;
export type AssignRoleViewModelListIDataResult = {};
export type AssignRoleViewModel = {
  id?: number;
  name?: string | null;
};
export type AssignRoleViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: AssignRoleViewModel[] | null;
};
export type IResult = {};
export type IResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
};
export type CategoryViewModel = {
  id?: number;
  name?: string | null;
};
export type RoleViewModel = {
  name?: string | null;
};
export type HelpdeskViewModel = {
  id?: number;
  fullName?: string | null;
  role?: RoleViewModel;
};
export type UserViewModel = {
  id?: number;
  fullName?: string | null;
  userName?: string | null;
  profileImage?: string | null;
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
export type TicketAttacmentViewModel = {
  fileName?: string | null;
  file?: string | null;
  fileType?: string | null;
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
  files?: TicketAttacmentViewModel[] | null;
};
export type CategoriesPageViewModel = {
  category?: CategoryViewModel;
  completedTicketCount?: number;
  pendingTicketCount?: number;
  waitingTicketCount?: number;
  cancelledTicketCount?: number;
  tickets?: TicketViewModel[] | null;
};
export type CategoriesPageViewModelIDataResult = {
  data?: CategoriesPageViewModel;
};
export type CategoriesPageViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: CategoriesPageViewModel;
};
export type MonthlySupportRequest = {
  month?: string | null;
  openedCount?: number;
  closedCount?: number;
};
export type DashboardViewModel = {
  userCount?: number;
  customerCount?: number;
  ticketCount?: number;
  monthlySupportRequests?: MonthlySupportRequest[] | null;
};
export type DashboardViewModelIDataResult = {
  data?: DashboardViewModel;
};
export type DashboardViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: DashboardViewModel;
};
export type AdminPanelTicketsTableViewModelListIDataResult = {};
export type CreatorViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
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
export type UserProfileForAdminPanelViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  adress?: string | null;
  createdAt?: string;
  role?: RoleViewModel;
  profileImage?: string | null;
  isApproved?: boolean;
};
export type UserProfileForAdminPanelViewModelIDataResult = {
  data?: UserProfileForAdminPanelViewModel;
};
export type UserProfileForAdminPanelViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: UserProfileForAdminPanelViewModel;
};
export type CustomerProfileViewModelListIDataResult = {};
export type CustomerProfileViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  adress?: string | null;
  createdAt?: string;
  role?: RoleViewModel;
  profileImage?: string | null;
  isApproved?: string | null;
};
export type CustomerProfileViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: CustomerProfileViewModel[] | null;
};
export type UserProfileViewModelListIDataResult = {};
export type UserProfileViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  adress?: string | null;
  createdAt?: string;
  role?: RoleViewModel;
  profileImage?: string | null;
};
export type UserProfileViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: UserProfileViewModel[] | null;
};
