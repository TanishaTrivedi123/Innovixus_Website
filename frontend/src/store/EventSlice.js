// src/features/events/eventSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getEvent: (state, action) => {
      state.events = action.payload;
    },
    deleteEvent: (state, action) => {
      const idToDelete = action.payload;
      state.events = state.events.filter((event) => event._id !== idToDelete);
    },
  },
});

export const { getEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
