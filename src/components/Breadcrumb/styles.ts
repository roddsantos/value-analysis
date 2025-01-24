import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

export const BreadcrumbHomeIcon = styled.i`
  color: #939393;
  margin-right: 10px;
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  &.MuiBreadcrumbs-root {
    & .MuiBreadcrumbs-li {
      font: normal normal normal 0.6875rem Helvetica;
    }
  }
`;

export const StyledBreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;
