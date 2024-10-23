import { useAppDispatch } from "../store/hooks";
import { apiAuth } from "../store/api/enhances/enhancedApiAuth";
import {
  setUserAccessToken,
  userLogin,
  userLogout,
} from "../store/slices/user/userSlice";

export default function useAuthenticationControl() {
  // Store
  const dispatch = useAppDispatch();
  // Hooks
  // Queries
  const [getUserAuths] = apiAuth.useLazyGetApiAuthGetUserProfileQuery();
  // Handlers
  type loginOptions = {
    token: string;
    rememberMe?: boolean;
  };

  console.log("use authentication control render oldu.");

  const login = async ({ token }: loginOptions) => {
    try {
      dispatch(setUserAccessToken(token));
      const usersAuthQuery = await getUserAuths();
      const userAuth = usersAuthQuery.data?.data ?? {};

      if (usersAuthQuery.error) {
        return false;
      }

      const id = userAuth.id ?? 0;
      const username = userAuth.username ?? "";
      const fullName = userAuth.fullName ?? "";
      const email = userAuth.email ?? "";
      const phoneNumber = userAuth.phoneNumber ?? "";
      const adress = userAuth.adress ?? "";
      const role = userAuth.role ?? {};

      dispatch(
        userLogin({
          id,
          username,
          fullName,
          email,
          phoneNumber,
          adress,
          role,
          accessToken: token,
        })
      );
    } catch (err: any) {
      return false;
    }
    return true;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch(userLogout());
  };

  return {
    login,
    logout,
  };
}
