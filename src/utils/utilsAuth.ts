import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  exp: number;
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    const result = decoded.exp < currentTime;
    return result;
  } catch (error) {
    return true;
  }
};

export const getValidToken = (token: string | null): string | null => {
  if (token != null) {
    const result = isTokenExpired(token) ? null : token;
    return result;
  } else {
    return null;
  }
};
