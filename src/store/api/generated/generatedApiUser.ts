import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiAuthGetUserProfile: build.query<
      GetApiAuthGetUserProfileApiResponse,
      GetApiAuthGetUserProfileApiArg
    >({
      query: () => ({ url: `/api/Auth/GetUserProfile` }),
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
    getApiUserGetHelpdesks: build.query<
      GetApiUserGetHelpdesksApiResponse,
      GetApiUserGetHelpdesksApiArg
    >({
      query: () => ({ url: `/api/User/GetHelpdesks` }),
    }),
    putApiUserUpdateUser: build.mutation<
      PutApiUserUpdateUserApiResponse,
      PutApiUserUpdateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/UpdateUser`,
        method: "PUT",
        body: queryArg.updateUserRequestModel,
      }),
    }),
    postApiUserRegister: build.mutation<
      PostApiUserRegisterApiResponse,
      PostApiUserRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/Register`,
        method: "POST",
        body: queryArg.registerUserRequestModel,
      }),
    }),
    postApiUserResetPassword: build.mutation<
      PostApiUserResetPasswordApiResponse,
      PostApiUserResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/ResetPassword`,
        method: "POST",
        body: queryArg.resetPasswordRequestModel,
      }),
    }),
    postApiUserForgotPassword: build.mutation<
      PostApiUserForgotPasswordApiResponse,
      PostApiUserForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/ForgotPassword`,
        method: "POST",
        body: queryArg.forgotPasswordRequestModel,
      }),
    }),
    postApiUserSendPasswordResetEmail: build.mutation<
      PostApiUserSendPasswordResetEmailApiResponse,
      PostApiUserSendPasswordResetEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/User/SendPasswordResetEmail`,
        method: "POST",
        params: {
          emailAdress: queryArg.emailAdress,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedUser };
export type GetApiAuthGetUserProfileApiResponse =
  /** status 200 OK */ UserProfileViewModelIDataResultRead;
export type GetApiAuthGetUserProfileApiArg = void;
export type GetApiTicketGetTicketsOfUserApiResponse =
  /** status 200 OK */ TicketViewModelListIDataResultRead;
export type GetApiTicketGetTicketsOfUserApiArg = {
  id?: number;
};
export type GetApiUserGetCustomerProfileListForAdminPanelApiResponse =
  /** status 200 OK */ CustomerProfileViewModelListIDataResultRead;
export type GetApiUserGetCustomerProfileListForAdminPanelApiArg = void;
export type GetApiUserGetHeldesksProfileListForAdminPanelApiResponse =
  /** status 200 OK */ UserProfileViewModelListIDataResultRead;
export type GetApiUserGetHeldesksProfileListForAdminPanelApiArg = void;
export type GetApiUserGetHelpdesksApiResponse =
  /** status 200 OK */ HelpdeskViewModelListIDataResultRead;
export type GetApiUserGetHelpdesksApiArg = void;
export type PutApiUserUpdateUserApiResponse = /** status 200 OK */ IResultRead;
export type PutApiUserUpdateUserApiArg = {
  updateUserRequestModel: UpdateUserRequestModel;
};
export type PostApiUserRegisterApiResponse = /** status 200 OK */ IResultRead;
export type PostApiUserRegisterApiArg = {
  registerUserRequestModel: RegisterUserRequestModel;
};
export type PostApiUserResetPasswordApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiUserResetPasswordApiArg = {
  resetPasswordRequestModel: ResetPasswordRequestModel;
};
export type PostApiUserForgotPasswordApiResponse =
  /** status 200 OK */ IResultRead;
export type PostApiUserForgotPasswordApiArg = {
  forgotPasswordRequestModel: ForgotPasswordRequestModel;
};
export type PostApiUserSendPasswordResetEmailApiResponse =
  /** status 200 OK */ string;
export type PostApiUserSendPasswordResetEmailApiArg = {
  emailAdress?: string;
};
export type RoleViewModel = {
  name?: string | null;
};
export type UserProfileViewModel = {
  id?: number;
  username?: string | null;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  adress?: string | null;
  createdAt?: string;
  role?: RoleViewModel;
};
export type UserProfileViewModelIDataResult = {
  data?: UserProfileViewModel;
};
export type UserProfileViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: UserProfileViewModel;
};
export type TicketViewModelListIDataResult = {};
export type HelpdeskViewModel = {
  id?: number;
  fullName?: string | null;
  role?: RoleViewModel;
};
export type CategoryViewModel = {
  id?: number;
  name?: string | null;
};
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
  isApproved?: string | null;
};
export type CustomerProfileViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: CustomerProfileViewModel[] | null;
};
export type UserProfileViewModelListIDataResult = {};
export type UserProfileViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: UserProfileViewModel[] | null;
};
export type HelpdeskViewModelListIDataResult = {};
export type HelpdeskViewModelListIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: HelpdeskViewModel[] | null;
};
export type IResult = {};
export type IResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
};
export type UpdateUserRequestModel = {
  id?: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
};
export type RegisterUserRequestModel = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber?: string | null;
  address?: string | null;
};
export type ResetPasswordRequestModel = {
  email?: string | null;
  oldPassword?: string | null;
  newPassword: string;
  passwordConfirm: string;
};
export type ForgotPasswordRequestModel = {
  email?: string | null;
  passwordResetToken?: string | null;
  password?: string | null;
  passwordConfirm?: string | null;
};
