import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 10000,
});

const handleError = (error: any) => {
  // Xử lý lỗi tại đây
  return Promise.reject(error);
};

export const get = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(
      `${url}?${data ? new URLSearchParams(data).toString() : ""}`,
      config
    );
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(
      url,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.put(
      url,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
