import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IQuestion } from "../models/models";

export interface QuestionReducer {
  questions: IQuestion[];
}

const initialState: QuestionReducer = {
  questions: [],
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    updateQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
    },
  },
});

export const { updateQuestions } = questionSlice.actions;

export default questionSlice.reducer;
