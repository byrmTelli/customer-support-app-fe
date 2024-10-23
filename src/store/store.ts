import { configureStore, Middleware } from "@reduxjs/toolkit";
import { apiAuth } from "./api/enhances/enhancedApiAuth";
import { apiCategory } from "./api/enhances/enhancedApiCategory";
import { apiComment } from "./api/enhances/enhancedApiComment";
import { apiTicket } from "./api/enhances/enhancedApiTicket";
import { apiUser } from "./api/enhances/enhancedApiUser";
import { userSlice } from "./slices/user/userSlice";

const middlewares: Middleware[] = [
  apiAuth.middleware,
  apiCategory.middleware,
  apiComment.middleware,
  apiTicket.middleware,
  apiUser.middleware,
];

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
    [apiComment.reducerPath]: apiComment.reducer,
    [apiTicket.reducerPath]: apiTicket.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
