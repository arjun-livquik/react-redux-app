import styled from "styled-components";

const Paper = styled.div`
  box-shadow: 2px 2px 17px -5px rgba(0, 0, 0, 0.75);
  padding: ${({ theme }) => theme.spacing(2)};
`;

export default Paper;
