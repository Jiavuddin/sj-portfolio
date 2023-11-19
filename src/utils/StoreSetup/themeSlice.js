import { createSlice } from '@reduxjs/toolkit';

// Initializes Theme Slice state
const initialState = {
    theme: sessionStorage.getItem('Theme') !== null ? JSON.parse(sessionStorage.getItem('Theme')) : window.matchMedia('(prefers-color-scheme: light)').matches,
};

// Configures Theme Slice
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

// Theme Slice Actions
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;