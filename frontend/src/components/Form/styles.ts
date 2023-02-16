import styled from "styled-components";


export const FormContainer = styled.div`
  max-width: 35.188rem;
  width: 100%;
  padding-top: 11.188rem;

  display: flex;
  flex-direction: column;

  h1 {
    line-height: 52px;
    font-size: 2.5rem;
    font-weight: 400;

    margin-bottom: 1.875rem;
  }

  @media (max-width: 720px) {
    padding-top: 2rem;
  }
`; 

export const FormUsage = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const Textarea = styled.textarea`
    padding-block: 1.938rem;
    padding-inline:2.875rem;
    border-radius: 10px;

    resize: none;

    border: 1px solid ${props => props.theme["gray-200"]};

    &:focus {
      border: 1px solid ${props => props.theme["yellow-300"]};
      outline-color: ${props => props.theme["yellow-300"]};
    }

    
  @media (max-width: 720px) {
    padding-inline: 1.5rem;

  }
`;

export const Button = styled.button`
  padding-block: 1.75rem;
  padding-inline: 3.25rem;
  font-size:1.125rem;
  display: flex;
  align-self: flex-start;
  margin-top:1.1rem;

  align-items: center;
  gap: 0.5rem;

  border-radius: 31.25rem;
  border: none;

  cursor: pointer;

  background-color: ${props => props.theme["yellow-300"]};
  color: ${props => props.theme["white"]};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

`; 

export const SpinnerRotate = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: rotate 1s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

`;


export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  margin-top: 1.5rem;

  color: ${props => props.theme["green-300"]};


`;
