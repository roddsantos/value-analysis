import { useEffect, useState } from 'react';
import * as S from './styles';

export type VariantSnackbar =
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | undefined;
export interface CustomDialogProps {
  isOpen?: boolean;
  message?: string;
  variant?: VariantSnackbar;
  onClose?: () => void;
}
export const CustomSnackbar = ({
  isOpen = false,
  message,
  variant,
  onClose,
}: CustomDialogProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleCloseSnack = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  const returnIconClass = () => {
    switch (variant) {
      case 'success':
        return 'bx bx-check';
      case 'error':
        return 'bx bx-window-close';
      case 'warning':
        return 'bx bx-error';
      case 'info':
        return 'bx bx-info-circle';
      default:
        return '';
    }
  };

  const background = () => {
    switch (variant) {
      case 'success':
        return '#e8f7f0';
      case 'error':
        return '#f7e8e8';
      case 'warning':
        return '#f7f3e8';
      case 'info':
        return '#e8e8f7';
      default:
        return '#cfcfcf';
    }
  };

  const accent = () => {
    switch (variant) {
      case 'success':
        return '#53a77f';
      case 'error':
        return '#a75353';
      case 'warning':
        return '#a79353';
      case 'info':
        return '#535ba7';
      default:
        return '#474747';
    }
  };

  return (
    <S.StyledSnackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={handleCloseSnack}
      autoHideDuration={4000}
    >
      <S.SnackbarContainer background={background()} accent={accent()}>
        <i className={returnIconClass()}></i>
        <p>{message}</p>
        <i
          onClick={() => handleCloseSnack()}
          style={{ cursor: 'pointer' }}
          className="bx bx-x"
        ></i>
      </S.SnackbarContainer>
    </S.StyledSnackbar>
  );
};
