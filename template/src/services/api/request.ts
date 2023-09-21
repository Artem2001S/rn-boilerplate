import axios, {
  AxiosHeaderValue,
  AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
  Method,
} from 'axios';

import {AppStorage, AppStorageKeys} from '@/services/appStorage';

type MethodsHeaders = Partial<
  {
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
  } & {common: AxiosHeaders}
>;

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const request = <T>(
  method: Methods,
  opts: AxiosRequestConfig,
  token?: string | null,
) => {
  const headers: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders = {
    ...opts.headers,
  };

  if (token) {
    headers.Authorization = token;
  }

  return axios.request<T>({
    ...opts,
    headers,
    method,
  });
};

export const authenticatedRequest = <T>(
  method: Methods,
  opts: AxiosRequestConfig,
) => {
  const token = AppStorage.getString(AppStorageKeys.authToken);

  return request<T>(method, opts, token);
};

export const externalRequest = <T>(
  externalUrl: string,
  opts: AxiosRequestConfig,
) => axios.request<T>({url: externalUrl, ...opts});
