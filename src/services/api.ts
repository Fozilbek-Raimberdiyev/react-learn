import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co";
axios.defaults.headers.common["Content-Type"] = "application/json";
export const useGet = (url: string) => axios.get(url);
export const usePost = (url: string, data: any) => axios.post(url, data);
export const useDelete = (url: string) => axios.delete(url);
export const usePut = (url: string, data: any) => axios.put(url, data);
export const useMultipartPost = (url: string, data: any) =>
  axios.post(url, data, { headers: { "Content-Type": "multipart/form-data" } });
