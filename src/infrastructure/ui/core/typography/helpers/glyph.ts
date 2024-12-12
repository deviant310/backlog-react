import { css } from "styled-components";

import { TransientProps } from "../../../helpers";

export const GlyphCSS = css<TransientProps<GlyphStyledProps>>`
  color: ${({ theme, $color }) => {
    if ($color === "default") return theme.colors.default[1].filled();
    if ($color === "light") return theme.colors.default[2].filled();
    if ($color === "xlight") return theme.colors.default[3].filled();
    if ($color === "primary") return theme.colors.primary[2].filled();
    if ($color === "error") return theme.colors.error[1].filled();
    if ($color === "warning") return theme.colors.warning[2].filled();
  }};
`;

export interface GlyphStyledProps {
  color?: GlyphColor;
}

export type GlyphColor =
  | "default"
  | "light"
  | "xlight"
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "danger";

export type GlyphSize = "large" | "medium" | "small" | "xsmall";
