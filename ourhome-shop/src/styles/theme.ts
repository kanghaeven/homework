import { keyframes } from "styled-components";

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

const animation = {
  slideUp: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  slideDown: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }  
  `,
  slideLeft: keyframes`
    from {
      transform: translateX(140%);
    }
    to {
      transform: translateX(0);
    }  
  `,
  slideRight: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(140%);
    }  
  `,
  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translate3D(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
  fadeOut: keyframes`
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  `,
  loading: keyframes`
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  `,
  duration: 400,
};

export const theme = {
  color,
  animation,
} as const;

export type Theme = typeof theme;

export default theme;
