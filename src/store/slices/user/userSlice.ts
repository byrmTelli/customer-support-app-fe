import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfileViewModel } from "../../api/generated/generatedApiAuth";
interface UserProfileExtraProps {
  accessToken: string | null;
  isAuthenticated: boolean;
}

type UserProfileInitialProps = UserProfileViewModel & UserProfileExtraProps;

const initialState: UserProfileInitialProps = {
  id: 0,
  username: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  adress: "",
  role: {},
  accessToken: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<Omit<UserProfileInitialProps, "isAuthenticated">>
    ) => {
      const s = state;
      const p = action.payload;

      s.id = p.id;
      s.username = p.username;
      s.fullName = p.fullName;
      s.email = p.email;
      s.phoneNumber = p.phoneNumber;
      s.adress = p.adress;
      s.role = p.role;
      s.accessToken = p.accessToken;

      s.isAuthenticated = true;

      if (p.accessToken) {
        localStorage.setItem("accessToken", p.accessToken);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRole: (state, action: PayloadAction<object>) => {
      state.role = action.payload;
    },
  },
});

export const {
  login: userLogin,
  logout: userLogout,
  setAccessToken: setUserAccessToken,
  setRole: setUserRole,
} = userSlice.actions;

export default userSlice.reducer;
