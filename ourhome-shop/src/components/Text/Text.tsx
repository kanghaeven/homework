import type { PropsWithChildren } from "react";
import type { CSSProp } from "styled-components";
import * as S from "./Text.styled";

export type Weight = "regular" | "bold";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Color =
  | "black"
  | "orange"
  | "blue1"
  | "blue2"
  | "gray3"
  | "gray4"
  | "gray5";
export interface TextProps {
  color?: Color;
  size?: Size;
  weight?: Weight;
  max?: number;
  css?: CSSProp;
}

function Text(props: PropsWithChildren<TextProps>) {
  const { color, size, weight, max, css, children } = props;
  let childrenText = children;

  if (max && typeof children === "string" && children.length > max) {
    childrenText = children.substring(0, max) + "...";
  }

  return (
    <S.TextWrapper color={color} size={size} weight={weight} css={css}>
      {childrenText}
    </S.TextWrapper>
  );
}

export default Text;
