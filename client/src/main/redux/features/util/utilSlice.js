import { createSlice } from '@reduxjs/toolkit'

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
  const theme = themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  showSidebar: false,
  loading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  theme: getThemeFromLocalStorage(),
}

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.showSidebar = !state.showSidebar
    },
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
    displayAlert: (state) => {
      state.showAlert = true;
      state.alertType = 'danger';
      state.alertText = 'Please provide all values!';
    },
    clearAlert: (state) => {
      state.showAlert = false;
      state.alertType = '';
      state.alertText = '';
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute('data-theme', state.theme);
    },
  },
})

export default utilSlice.reducer
export const { toggleSidebar, showLoading, hideLoading, displayAlert, clearAlert, toggleTheme } = utilSlice.actions