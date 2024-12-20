import cookie from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants.ts';

export interface AuthResponse {
  user: {
    email: string;
    username: string;
    bio: string;
    image: string | null;
  };
  credentials: {
    accessToken: string;
    accessTokenExpiredTime: string;
    refreshToken: string;
    refreshTokenExpiredTime: string;
  };
}

export const setCookie = (name: string, value: string) => {
  cookie.set(name, value, {
    sameSite: 'lax',
  });
};

export const getAccessToken = () => {
  return cookie.get(ACCESS_TOKEN);
};

export const addCookieToken = (response: AuthResponse) => {
  setCookie(ACCESS_TOKEN, response.credentials.accessToken);
  setCookie(REFRESH_TOKEN, response.credentials.refreshToken);
};

export const getRefreshToken = () => {
  return cookie.get(REFRESH_TOKEN);
};
