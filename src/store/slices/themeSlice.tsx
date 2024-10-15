import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITheme {
    theme: 'light-theme' | 'dark-theme';
}

const initialState: ITheme = {
    theme: 'light-theme',
};

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, newTheme: PayloadAction<'light-theme' | 'dark-theme'>) {
            state.theme = newTheme.payload;
        }
    },
});

export const {
    setTheme
} = ThemeSlice.actions;
export default ThemeSlice.reducer;