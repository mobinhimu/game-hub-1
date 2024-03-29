import axios, { type AxiosRequestConfig } from "axios";

export interface ResponseData<T> {
  results: T[];
  next: string | null;
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07b772d114d1402a991f57cff30d6cac",
  },
});

class ApiClient<T> {
  constructor(private endPoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    apiClient
      .get<ResponseData<T>>(this.endPoint, config)
      .then((res) => res.data);

  get = (id?: number | string, config?: AxiosRequestConfig) =>
    apiClient.get<T>(`${this.endPoint}/${id}`, config).then((res) => res.data);
}

export default ApiClient;
