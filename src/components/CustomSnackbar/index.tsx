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
      <S.SnackbarContainer variant={variant}>
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
