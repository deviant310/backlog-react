import {
  ForwardRefExoticComponent,
  FunctionComponent,
  InputHTMLAttributes,
  MutableRefObject,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { styled } from "styled-components";

import { TransientProps } from "../../../helpers";

export const Textbox: TextboxComponent = memo(
  forwardRef((props, ref) => {
    const {
      adornmentComponent: Adornment,
      invalid,
      variant,
      ...restProps
    } = props;
    const forwardedRef =
      ref as MutableRefObject<HTMLInputElement | null> | null;
    const inputRef = useRef<HTMLInputElement>(
      null,
    ) as MutableRefObject<HTMLInputElement | null>;

    const focusInput = useCallback(
      () => requestAnimationFrame(() => inputRef.current?.focus()),
      [],
    );

    const StyledInputWrapper = {
      filled: StyledInputWrapperFilled,
      standard: StyledInputWrapperStandard,
    }[variant ?? "standard"];

    useEffect(() => {
      if (forwardedRef) inputRef.current = forwardedRef.current;
    }, [forwardedRef]);

    return (
      <StyledInputWrapper $invalid={invalid} onMouseDown={focusInput}>
        {Adornment && (
          <StyledAdornmentWrapper>
            <Adornment />
          </StyledAdornmentWrapper>
        )}

        <StyledInput {...restProps} ref={ref ?? inputRef} />
      </StyledInputWrapper>
    );
  }),
);

const StyledInputWrapperStandard = styled.div<
  TransientProps<TextboxForwardedProps>
>`
  background-color: ${({ theme }) => theme.colors.primary.hex()};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 1em;
  cursor: text;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ $invalid, theme }) =>
      $invalid ? theme.colors.danger.hex() : theme.colors.tension.hex()};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform 200ms;
    background-color: ${({ $invalid, theme }) =>
      $invalid ? theme.colors.danger.hex() : theme.colors.tension.hex()};
  }

  &:focus-within:after {
    transform: scaleX(1);
  }
`;

StyledInputWrapperStandard.displayName = "InputWrapperStandard";

const StyledInputWrapperFilled = styled(StyledInputWrapperStandard)`
  background-color: ${({ theme }) => theme.colors.primary.hex()};
  // TODO вынести радиус в параметры темы
  border-radius: 0px;
  padding: 19px 15px;
  overflow: hidden;
  box-shadow: 0 0 0 1px inset
    ${({ $invalid, theme }) =>
      $invalid ? theme.colors.danger.hex() : theme.colors.default[1].filled()};

  &:focus-within {
    box-shadow: 0 0 0 2px inset
      ${({ $invalid, theme }) =>
        $invalid ? theme.colors.danger.hex() : theme.colors.tension.hex()};
  }

  &:before,
  &:after {
    display: none;
  }
`;

StyledInputWrapperFilled.displayName = "InputWrapperFilled";

const StyledAdornmentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  height: 100%;
`;

StyledAdornmentWrapper.displayName = "AdornmentWrapper";

const StyledInput = styled.input`
  border: none;
  padding: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.default[1].filled()};
  }
`;

StyledInput.displayName = "Input";

export type TextboxComponent = ForwardRefExoticComponent<
  TextboxProps & RefAttributes<HTMLInputElement>
>;

export interface TextboxBaseProps
  extends InputHTMLAttributes<HTMLInputElement> {
  adornmentComponent?: FunctionComponent;
  variant?: TextboxVariant;
}

export interface TextboxForwardedProps {
  invalid?: boolean;
}

export type TextboxProps = TextboxBaseProps & TextboxForwardedProps;

export type TextboxVariant = "standard" | "filled";
