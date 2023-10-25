import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: sessionStorage.getItem('Theme') !== null ? JSON.parse(sessionStorage.getItem('Theme')) : window.matchMedia('(prefers-color-scheme: light)').matches,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;