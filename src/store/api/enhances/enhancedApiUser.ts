import { generatedUser } from "../generated/generatedApiUser";

export const apiUser = generatedUser.enhanceEndpoints({
  addTagTypes: ["GetUserProfileForAdminPanel", "GetUsersProfile"],
  endpoints: {
    getApiUserGetUserProfileForAdminPanel: {
      providesTags: ["GetUserProfileForAdminPanel"],
    },
    postApiUserApproveUser: {
      invalidatesTags: ["GetUserProfileForAdminPanel"],
    },
    putApiUserUpdateUser: {
      invalidatesTags: ["GetUsersProfile"],
    },
  },
});
