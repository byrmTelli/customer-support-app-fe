import { useEffect, useState } from "react";
import { AuthProviderProps } from "./types";
import { apiAuth } from "../../store/api/enhances/enhancedApiAuth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogin } from "../../store/slices/user/userSlice";
import { getValidToken } from "../../utils/utilsAuth";

export default function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const accessTokenFromStorage = localStorage.getItem("accessToken");
  const accessToken = getValidToken(accessTokenFromStorage);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const [getUserAuth] = apiAuth.useLazyGetApiAuthGetUserProfileQuery();

  useEffect(() => {
    const loadUserData = async () => {
      if (accessToken) {
        try {
          const response = await getUserAuth().unwrap();
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
        } catch (error) {
          console.error("Kullanıcı bilgileri yüklenirken hata oluştu", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadUserData();
  }, [accessToken, isAuthenticated, dispatch, getUserAuth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
