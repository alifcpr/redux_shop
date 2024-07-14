import { createSlice } from "@reduxjs/toolkit";

// setting initialState type
interface ISettingState {
  theme: string;
}

// initialState
const initialState: ISettingState = {
  theme: localStorage.getItem("theme") ?? "light",
};

// settingSlice
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { changeTheme } = settingSlice.actions;

export default settingSlice.reducer;
