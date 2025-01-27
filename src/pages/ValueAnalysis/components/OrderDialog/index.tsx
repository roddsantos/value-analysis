import { Button } from 'components/Button';
import { CustomDialog } from 'components/CustomDialog';
import * as S from './styles';

type OrderDialogType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleApprove: () => void;
  handleReject: () => void;
};

export const OrderDialog = ({
  open,
  setOpen,
  handleApprove,
  handleReject,
}: OrderDialogType) => {
  return (
    <CustomDialog
      onClose={() => setOpen(false)}
      maxWidth="xl"
      open={open}
      title="Enviar cotação"
    >
      <S.StyledDialogText>
        Deseja enviar agora como pedido para o Protheus?
      </S.StyledDialogText>
      <S.DialogButtonsContainer>
        <Button
          types="secondary"
          title="Retornar a edição"
          onClick={() => setOpen(false)}
        />
        <Button types="third" title="Reprovar" onClick={() => handleReject()} />
        <Button
          types="primary"
          title="Aprovar"
          onClick={() => handleApprove()}
        />
      </S.DialogButtonsContainer>
    </CustomDialog>
  );
};
