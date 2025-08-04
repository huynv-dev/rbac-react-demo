import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types/user';
import type   { Permission } from '../types/permissions';

interface AuthState {
  user: User | null;
  permissions: Permission[];
}

const initialState: AuthState = {
  user: null,
  permissions: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setPermissions(state, action: PayloadAction<Permission[]>) {
      state.permissions = action.payload;
    },
    logout(state) {
      state.user = null;
      state.permissions = [];
    },
  },
});

export const { setUser, setPermissions, logout } = authSlice.actions;
export default authSlice.reducer;