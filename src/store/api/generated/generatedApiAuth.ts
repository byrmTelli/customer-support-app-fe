import { customerSupportAppApi as api } from "../customerSupportAppApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiAuthGetUserProfile: build.query<
      GetApiAuthGetUserProfileApiResponse,
      GetApiAuthGetUserProfileApiArg
    >({
      query: () => ({ url: `/api/Auth/GetUserProfile` }),
    }),
    postApiAuthLogin: build.mutation<
      PostApiAuthLoginApiResponse,
      PostApiAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Auth/Login`,
        method: "POST",
        body: queryArg.userLoginRequestModel,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedAuth };
export type GetApiAuthGetUserProfileApiResponse =
  /** status 200 OK */ UserProfileViewModelIDataResultRead;
export type GetApiAuthGetUserProfileApiArg = void;
export type PostApiAuthLoginApiResponse =
  /** status 200 OK */ UserLoginViewModelIDataResultRead;
export type PostApiAuthLoginApiArg = {
  userLoginRequestModel: UserLoginRequestModel;
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
  profileImage?: string | null;
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
export type UserLoginViewModel = {
  token?: string | null;
};
export type UserLoginViewModelIDataResult = {
  data?: UserLoginViewModel;
};
export type UserLoginViewModelIDataResultRead = {
  success?: boolean;
  message?: string | null;
  code?: number;
  data?: UserLoginViewModel;
};
export type UserLoginRequestModel = {
  username?: string | null;
  password?: string | null;
};
