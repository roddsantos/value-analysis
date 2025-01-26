import { DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const StyledTitle = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    padding: 0px;
  }
`;

export const StyledTitleText = styled.p`
  font: bold 17px Helvetica;
  color: #707070;
  margin: 35px 56.37px 0px;
`;

export const StyledTitleDivisor = styled.div`
  width: calc(100% - 37.34px);
  height: 1px;
  background-color: #e4e4e4;
  margin: 22.5px auto 0px;
`;
