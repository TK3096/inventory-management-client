import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  isSidebarCollapsed: boolean
  isDarkMode: boolean
}

const initialState: InitialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload
    },
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    },
  },
})

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions

export default globalSlice.reducer
