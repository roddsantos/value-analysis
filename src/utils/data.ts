import { CustomDialogProps } from 'components/CustomSnackbar';

/**
 * function to sort data decrescent from a sort array function
 * @param data1 data to be compared
 * @param data2 data to be compared
 * @param field field to compare datas
 * @returns 1 if comparision is true, -1 otherwise
 */
export const decrescent = <T>(data1: T, data2: T, field: keyof T) => {
  if (data1[field] > data2[field]) return 1;
  return -1;
};

/**
 * function to sort data crescent from a sort array function
 * @param data1 data to be compared
 * @param data2 data to be compared
 * @param field field to compare datas
 * @returns -1 if comparision is true, 1 otherwise
 */
export const crescent = <T>(data1: T, data2: T, field: keyof T) => {
  if (data1[field] > data2[field]) return -1;
  return 1;
};

/**
 * function to set params to a snackbar with success variant
 * @param message text to be displayed in snackbar
 * @returns a CustomDialogProps object
 */
export const successSnack = (message: string): CustomDialogProps => {
  return {
    isOpen: true,
    message,
    variant: 'success',
  };
};

/**
 * function to set params to a snackbar with error variant
 * @param message text to be displayed in snackbar
 * @returns a CustomDialogProps object
 */
export const errorSnack = (message: string): CustomDialogProps => {
  return {
    isOpen: true,
    message,
    variant: 'error',
  };
};

/**
 * funtion to close a snackbar
 * @returns a CustomDialogProps object
 */
export const closeSnack = (): CustomDialogProps => {
  return {
    isOpen: false,
  };
};
