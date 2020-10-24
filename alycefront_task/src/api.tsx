import axios from "axios";
import apiKey from "./apiKey";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
});

export const apiList = {
  getNews: (params: String) =>
    api
      .get(`?apiKey=${apiKey}&q=${params}`)
      .then((res: any) => res)
      .catch((err: any) => err),
};
