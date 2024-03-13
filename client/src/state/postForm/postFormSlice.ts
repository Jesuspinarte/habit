import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostFormStatus } from 'client/src/utils/types';

interface PostFormState {
  content: string;
  status: PostFormStatus;
}

const initialState: PostFormState = {
  content: `
    <h1>Tell us about today!</h1>
    <p>Use this like a diary, where you can save your daily progress and/or thoughts about your life during this day!</p>
  `,
  status: PostFormStatus.UNPUBLISHED,
};

const postFormSlice = createSlice({
  name: 'postForm',
  initialState,
  reducers: {
    changePostFormContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    publishPostFormContent: state => {
      state.status = PostFormStatus.PUBLISHED;
    },
    unpublishPostFormContent: state => {
      state.status = PostFormStatus.UNPUBLISHED;
    },
  },
});

export const {
  changePostFormContent,
  publishPostFormContent,
  unpublishPostFormContent,
} = postFormSlice.actions;

export default postFormSlice.reducer;
