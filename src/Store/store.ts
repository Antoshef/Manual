import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../Actions/quizAction";

export const store = configureStore({
  reducer: {
    questionsReducer: questionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch