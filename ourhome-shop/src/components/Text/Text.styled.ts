import { styled } from "styled-components";
import type { TextProps, Weight, Size, Color } from "~/components/Text/Text";
import theme from "~/styles/theme";

const fontWeight: Record<Weight, number> = {
  regular: 400,
  bold: 600,
};

const fontSize: Record<Size, string> = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "30px",
};

const fontColor: Record<Color, string> = {
  black: theme.color.BLACK,
  orange: theme.color.ORANGE,
  blue1: theme.color.BLUE100,
  blue2: theme.color.BLUE200,
  gray3: theme.color.GRAY300,
  gray4: theme.color.GRAY400,
  gray5: theme.color.GRAY500,
};

export const TextWrapper = styled.p<TextProps>`
  font-size: ${({ size = "md" }) => fontSize[size] || "initial"};
  font-weight: ${({ weight = "regular" }) => fontWeight[weight] || "initial"};
  color: ${({ color = "black" }) => fontColor[color] || "initial"};
  && {
    ${(props) => props.css}
  }
`;
