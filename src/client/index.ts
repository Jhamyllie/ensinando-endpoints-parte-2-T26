import axios from "axios";

export const client = axios.create({
  baseURL: "https://swapi.info/api/",
  timeout: 5000,
  params: { format: "json" },
});
