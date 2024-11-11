import { HTMLAttributes, memo, ElementRef } from "react";

import { styled } from "styled-components";

import { TransientProps } from "../../../helpers";

import { useRipple } from "./use-ripple";
// TODO type=primary|secondary...
export const Clickable = memo<ClickablePropsWithHTMLAttributes>(
  ({ children, disabled, rippleable, hoverable, ...props }) => {
    const { ref, ripples } = useRipple<ClickableElement>();

    return (
      <ClickableStyled
        $disabled={disabled}
        $hoverable={hoverable}
        {...props}
        ref={ref}
      >
        {rippleable && <ClickableAreaStyled>{ripples}</ClickableAreaStyled>}
        <ClickableContentStyled>{children}</ClickableContentStyled>
      </ClickableStyled>
    );
  },
);
// TODO сделать hover через :after (так цвет ховера будет зависеть от основного)
const ClickableStyled = styled.div<TransientProps<ClickableStyledProps>>`
  user-select: none;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ $disabled }) => $disabled && "50%"};
  transition-duration: 150ms;
  transition-property: background-color, opacity;

  &:hover,
  &:active {
    background-color: ${({ theme, $hoverable }) =>
      $hoverable && theme.colors.default[8].transparent()};
  }

  --ripple-background-color: ${({ theme }) =>
    theme.colors.default[8].transparent()};
`;

const ClickableAreaStyled = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ClickableContentStyled = styled.div`
  position: relative;
  pointer-events: none;
`;

export interface ClickableStyledProps {
  disabled?: boolean;
  hoverable?: boolean;
}

export interface ClickableProps extends ClickableStyledProps {
  rippleable?: boolean;
}

interface ClickablePropsWithHTMLAttributes
  extends HTMLAttributes<ClickableElement>,
    ClickableProps {}

export type ClickableElement = ElementRef<typeof ClickableStyled>;
