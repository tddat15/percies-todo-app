import { apiPost } from '../../../core/libs/axios';
import { getRefreshToken } from '../../../utils/sesstion.ts';

export const onSignup = (params: {
  email: string;
  username: string;
  password: string;
}) => {
  const user = {
    email: params.email,
    username: params.username,
    password: params.password,
  };
  return apiPost('/auth/register', { user });
};

export const onRefreshToken = () => {
  const refreshToken = getRefreshToken();
  return apiPost('/auth/refresh', {
    refreshToken,
  });
};
