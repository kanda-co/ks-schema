import { createAsyncThunk } from "@reduxjs/toolkit";

export const reloadInitialData = createAsyncThunk(
  "app/reloadInitialData",
  async () => {}
);
