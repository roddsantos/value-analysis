import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  SxProps,
  Theme,
} from '@mui/material';
import * as S from './styles';

type CustomDialogType = {
  actionsStyle?: SxProps<Theme>;
  footer?: React.ReactNode;
} & DialogProps;

export const CustomDialog = ({
  children,
  open,
  title,
  maxWidth,
  actionsStyle,
  footer,
  ...rest
}: CustomDialogType) => {
  return (
    <Dialog maxWidth={maxWidth} open={open} {...rest}>
      <S.StyledTitle>
        <S.StyledTitleText>{title}</S.StyledTitleText>
        <S.StyledTitleDivisor />
      </S.StyledTitle>
      <DialogContent>{children}</DialogContent>
      {!!footer && <DialogActions sx={actionsStyle}>{footer}</DialogActions>}
    </Dialog>
  );
};
