import { generatedAdmin } from "../generated/generatedApiAdmin";

export const apiAdmin = generatedAdmin.enhanceEndpoints({
  addTagTypes: ["GetCustomerProfileForAdminPanel"],
  endpoints: {
    getApiUserGetCustomerProfileListForAdminPanel: {
      providesTags: ["GetCustomerProfileForAdminPanel"],
    },
    postApiAdminAssignRoleToUser: {
      invalidatesTags: ["GetCustomerProfileForAdminPanel"],
    },
  },
});
