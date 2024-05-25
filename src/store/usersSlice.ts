import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../pages/types';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        name: {
          title: 'empty',
          first: '',
          last: '',
        },
        picture: {
          large: '',
          medium: '',
          thumbnail: '',
        },
      },
    ],
  },
  reducers: {
    setUsers: (state, action: PayloadAction<Array<User>>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
