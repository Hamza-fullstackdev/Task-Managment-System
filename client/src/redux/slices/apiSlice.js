import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({
  tagTypes: [],
  baseQuery,
  endpoints: (builder) => ({
    // getTasks: builder.get("/tasks"),
    // getTask: builder.get("/tasks/{id}"),
    // createTask: builder.post("/tasks"),
    // updateTask: builder.put("/tasks/{id}"),
    // deleteTask: builder.delete("/tasks/{id}"),
  }),
});
