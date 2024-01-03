const color = {
  ORANGE: "#ff6500",
  BLUE100: "#3fc2ec",
  BLUE200: "#448ccb",

  WHITE: "#fff",
  WHITE_BLUR: "#ffffffad",
  BLACK: "#000",
  TRANSPARENT_BLACK: "#777777aa",

  GRAY100: "#fafafa",
  GRAY200: "#eee",
  GRAY300: "#b5b5b5",
  GRAY400: "#888",
  GRAY500: "#666",
} as const;

export const theme = {
  color,
} as const;

export type Theme = typeof theme;

export default theme;
