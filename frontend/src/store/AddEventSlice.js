// src/store/AddEventSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  upcomingEvent: {
    title: "",
    description: "",
    // optional: if you want to keep track of the ID
  },
};

const AddUpcomingSlice = createSlice({
  name: "upcomingEvent",
  initialState,
  reducers: {
    setUpcomingEvent: (state, action) => {
      state.upcomingEvent = action.payload;
    },
    deleteUpcomingEvent: (state) => {
      state.upcomingEvent.title = "";
      state.upcomingEvent.description = "";
    },
  },
});

export const { setUpcomingEvent, deleteUpcomingEvent } =
  AddUpcomingSlice.actions;

export default AddUpcomingSlice.reducer;
