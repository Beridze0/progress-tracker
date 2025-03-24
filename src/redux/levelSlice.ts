import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const XP_PER_LEVEL = (level: number) => level * 100;

interface LevelState {
  xp: number;
  level: number;
}

const initialState: LevelState = {
  xp: parseInt(localStorage.getItem("xp") || "0", 10),
  level: parseInt(localStorage.getItem("level") || "1", 10),
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    gainXP: (state, action: PayloadAction<number>) => {
      state.xp += action.payload;
      while (state.xp >= XP_PER_LEVEL(state.level)) {
        state.xp -= XP_PER_LEVEL(state.level);
        state.level += 1;
      }
      localStorage.setItem("xp", state.xp.toString());
      localStorage.setItem("level", state.level.toString());
    },
    resetXP: (state) => {
      state.xp = 0;
      state.level = 1;
      localStorage.setItem("xp", "0");
      localStorage.setItem("level", "1");
    },
  },
});

export const { gainXP, resetXP } = levelSlice.actions
export default levelSlice.reducer


