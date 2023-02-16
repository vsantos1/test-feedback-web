import styled, { css } from "styled-components";

interface BorderColorErrorProps {
  borderColorError: boolean;
}

export const InputContainer = styled.input<BorderColorErrorProps>`
  padding-block: 1.938rem;
  padding-inline:2.875rem;
  border-radius: 10px;

  border: 1px solid ${props => props.theme["gray-200"]};

  &:focus {
      border: 1px solid ${props => props.theme["yellow-300"]};
      outline-color: ${props => props.theme["yellow-300"]};
    }


  ${props => props.borderColorError && css`
    border: 1px solid ${props => props.theme["red-300"]};
  `}
`;

export const SpanError = styled.span`
  color: ${props => props.theme["red-300"]};
  font-size: 1.125rem;
  font-weight: 400;
`;
