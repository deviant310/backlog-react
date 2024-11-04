import { ElementRef, HTMLAttributes, memo } from "react";

import { css, styled } from "styled-components";

import { UnitIndex, getUnitWithMeasure, TransientProps } from "../../helpers";

export const Grid = memo<GridProps>(props => {
  const { alignItems, autoFlow, gap, justifyContent, ...restProps } = props;

  return (
    <GridStyled
      $alignItems={alignItems}
      $autoFlow={autoFlow}
      $gap={gap}
      $justifyContent={justifyContent}
      {...restProps}
    />
  );
});

Grid.displayName = "Grid";

export const GridCSS = css<TransientProps<GridStyledProps>>`
  display: grid;
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow};
  align-items: ${({ $alignItems }) => $alignItems};

  justify-content: ${({ $justifyContent }) =>
    $justifyContent &&
    {
      center: "center",
      around: "space-around",
      between: "space-between",
      start: "start",
      end: "end",
    }[$justifyContent]};

  gap: ${({ $gap }) => getUnitWithMeasure($gap)};
`;

const GridStyled = styled.div<TransientProps<GridStyledProps>>`
  ${GridCSS}
`;

export type GridStyledProps = {
  justifyContent?: "center" | "start" | "end" | "around" | "between";
  alignItems?: "center" | "top" | "bottom" | "baseline";
  autoFlow?: "row" | "column";
  gap?: UnitIndex;
};

export interface GridProps
  extends HTMLAttributes<GridElement>,
    GridStyledProps {}

export type GridElement = ElementRef<typeof GridStyled>;