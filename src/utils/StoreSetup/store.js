import { configureStore } from '@reduxjs/toolkit';
import themeSliceReducer from './themeSlice';

// Configures Store
export const store = configureStore({
    reducer: {
        themeSlice: themeSliceReducer
    },
});