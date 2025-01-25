import { Dialog, DialogContent, DialogProps } from '@mui/material';
import * as S from './styles';

type CustomDialogType = DialogProps;

export const CustomDialog = ({
  children,
  open,
  title,
  maxWidth,
  ...rest
}: CustomDialogType) => {
  return (
    <Dialog maxWidth={maxWidth} open={open} {...rest}>
      <S.StyledTitle>
        <S.StyledTitleText>{title}</S.StyledTitleText>
        <S.StyledTitleDivisor />
      </S.StyledTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
