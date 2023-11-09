import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const useAxios = new Http().instance;

export default useAxios;
