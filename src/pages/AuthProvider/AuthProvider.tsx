import { useEffect } from "react";
import { AuthProviderProps } from "./types";
import { apiAuth } from "../../store/api/enhances/enhancedApiAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogin } from "../../store/slices/user/userSlice";
import { getValidToken } from "../../utils/utilsAuth";

export default function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();
  const accessTokenFromStorage = localStorage.getItem("accessToken");
  const accessToken = getValidToken(accessTokenFromStorage);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const [getUserAuth] = apiAuth.useLazyGetApiAuthGetUserProfileQuery();

  useEffect(() => {
    if (accessToken) {
      getUserAuth()
        .unwrap()
        .then((response) => {
          const data = response.data;
          dispatch(
            userLogin({
              id: data?.id,
              username: data?.username,
              fullName: data?.fullName,
              email: data?.email,
              phoneNumber: data?.phoneNumber,
              adress: data?.adress,
              role: data?.role,
              accessToken: accessToken,
            })
          );
        })
        .catch();
    }
  }, [isAuthenticated, accessToken, getUserAuth, dispatch]);

  return <>{children}</>;
}
