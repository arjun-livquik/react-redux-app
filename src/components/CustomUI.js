import styled from "styled-components";
import Paper from "./Paper";
export const MyPaper = styled(Paper)`
  flex: 1;
  max-width: 500px;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 32px);
`;

export const FormActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
