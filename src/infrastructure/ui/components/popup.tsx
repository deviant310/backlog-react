import { HTMLAttributes, memo, useEffect } from "react";

import { createPortal } from "react-dom";
import { styled } from "styled-components";

import { getRootElement } from "~/react";

import {
  animated,
  Area,
  AreaCSS,
  AreaProps,
  CircleCSS,
  CircleStyledProps,
  Clickable,
  ClickableElement,
  CloseIcon,
  FlexCSS,
  FlexStyledProps,
  GridCSS,
  GridStyledProps,
  Paper,
} from "../core";
import { TransientProps } from "../helpers";

export const Popup = memo<PopupProps>(props => {
  const { children, opened, onClose } = props;

  useEffect(() => {
    document.body.style.overflowY = opened ? "hidden" : "";
  }, [opened]);

  return createPortal(
    <PopupRootStyled>
      <AreaFaded position="fixed">
        {opened && <PopupBackgroundStyled />}
      </AreaFaded>

      <GridArea
        $justifyContent="center"
        $alignItems="center"
        $position="fixed"
        $top={0}
        $left={0}
        $width="100vw"
        $height="100vh"
        $overflow="auto"
        $disabled={!opened}
        onMouseDown={({ target, currentTarget }) =>
          target === currentTarget && onClose?.()
        }
      >
        <AreaScaled marginVertical={2.4}>
          {opened && (
            <Paper radius={1.6}>
              <Area position="relative">
                <Area position="absolute" right={1.2} top={1.2}>
                  {onClose && <PopupClose onClick={onClose} />}
                </Area>

                {children}
              </Area>
            </Paper>
          )}
        </AreaScaled>
      </GridArea>
    </PopupRootStyled>,
    getRootElement(),
  );
});

const PopupRootStyled = styled.div`
  position: relative;
  z-index: 2;
`;

const PopupBackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.default[5].transparent()};
`;

const GridArea = styled.div<TransientProps<GridStyledProps & AreaProps>>`
  ${GridCSS}
  ${AreaCSS}
`;

const AreaScaled = animated(Area, "scale");
const AreaFaded = animated(Area, "fade");

const PopupClose = memo<PopupCloseProps>(props => (
  <PopupCloseStyled
    $size={3.6}
    $justifyContent="center"
    $alignItems="center"
    {...props}
  >
    <CloseIcon />
  </PopupCloseStyled>
));

const PopupCloseStyled = styled(Clickable)<
  TransientProps<FlexStyledProps & CircleStyledProps>
>`
  ${FlexCSS}
  ${CircleCSS}
`;

export interface PopupStyledProps {
  opened: boolean;
}

export interface PopupProps
  extends HTMLAttributes<HTMLDivElement>,
    PopupStyledProps {
  onClose?(): void;
}

type PopupCloseProps = HTMLAttributes<ClickableElement>;