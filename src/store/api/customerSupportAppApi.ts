import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getValidToken } from "../../utils/utilsAuth";
import { RootState } from "../store";

export const customerSupportAppApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token =
        state.user.accessToken || localStorage.getItem("accessToken");

      if (token) {
        const validToken = getValidToken(token);
        headers.set("Authorization", `Bearer ${validToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
