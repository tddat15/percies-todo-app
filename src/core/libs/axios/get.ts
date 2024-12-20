import { axiosInstance, Callback } from './axios-instance.ts';
import { HOST } from '../../../config';

interface ParamRequest {
  [k: string]: any;
}

const apiGet = async (
  url: string,
  params?: ParamRequest,
  cb?: Callback<any>,
) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get(HOST + url, { params: params });

    if (cb) {
      return cb(data);
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default apiGet;
