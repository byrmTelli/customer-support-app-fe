import { generatedAuth } from "../generated/generatedApiAuth";

export const apiAuth = generatedAuth.enhanceEndpoints({
  addTagTypes: ["GetUsersProfile"],
  endpoints: {
    getApiAuthGetUserProfile: {
      providesTags: ["GetUsersProfile"],
    },
  },
});
