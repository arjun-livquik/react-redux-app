import styled from "styled-components";

const Button = styled.button`
  border: none;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.dimentions.button.textSize};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.common.white};
`;

export default Button;
