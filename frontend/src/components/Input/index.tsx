import { forwardRef, LegacyRef } from "react";
import { InputContainer, SpanError } from "./styles";

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  error?: any | undefined;
}

const InputBase = (
  { type, label, placeholder, error, ...rest }: InputProps,
  ref: any
) => {
  return (
    <>
      <InputContainer
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        borderColorError={error && "red"}
      />
      {error && <SpanError>{error}</SpanError>}
    </>
  );
};

export const Input = forwardRef(InputBase);
