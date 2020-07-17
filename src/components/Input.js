import React from "react";
import styled from "styled-components";
import ErrorText from "./ErrorText";

const StyledInput = styled.input`
  padding: ${(props) => props.theme.spacing(1)};
  border-color: ${({ error, theme }) => (error ? theme.colors.error : "")};
  border-width: 2px;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

const Input = ({ title, ...props }) => {
  const { id, error } = props;
  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{title}</label>
      <StyledInput {...props} />
      {error &&
        (typeof error === "object" ? (
          error.map((msg) => <ErrorText key={msg}>{msg}</ErrorText>)
        ) : (
          <ErrorText>{error}</ErrorText>
        ))}
    </StyledInputWrapper>
  );
};

export default Input;
