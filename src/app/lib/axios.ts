import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GRAPHQL_API || "https://graphql-pokemon2.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
