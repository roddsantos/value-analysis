import { CustomDialog } from 'components/CustomDialog';
import * as S from './styles';
import React, { useMemo, useState } from 'react';
import { Button } from 'components/Button';

type RejectOrderDialogType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: (obj: any) => void;
};

export const RejectOrderDialog = ({
  open,
  setOpen,
  handleConfirm,
}: RejectOrderDialogType) => {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [justification, setJustification] = useState('');

  const disabledButton = useMemo(() => {
    return (
      code.length === 0 ||
      description.length === 0 ||
      type.length === 0 ||
      justification.length === 0
    );
  }, [code, description, type, justification]);

  return (
    <CustomDialog
      maxWidth="sm"
      open={open}
      title="Reprovar"
      onClose={() => setOpen(false)}
      footer={
        <S.ButtonsContainer>
          <Button
            types="secondary"
            title="Cancelar"
            onClick={() => setOpen(false)}
          />
          <Button
            types="primary"
            disabled={disabledButton}
            title="Confirmar"
            onClick={() =>
              handleConfirm({
                code,
                description,
                type,
                justification,
              })
            }
          />
        </S.ButtonsContainer>
      }
    >
      <S.StyledContainer>
        <S.StyledTextfield
          width={'20%'}
          slotProps={{
            htmlInput: {
              maxLength: 4,
            },
            input: {
              startAdornment: (
                <S.StyledStartAdornment>Código</S.StyledStartAdornment>
              ),
              type: 'number',
            },
          }}
          value={code}
          onChange={(e) => setCode(e.target.value.toString().slice(0, 3))}
        />
        <S.StyledTextfield
          width={'75%'}
          multiline
          slotProps={{
            htmlInput: {
              maxLength: 100,
            },
            input: {
              startAdornment: (
                <S.StyledStartAdornment>Descrição</S.StyledStartAdornment>
              ),
            },
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <S.StyledTextfield
          width={182}
          slotProps={{
            htmlInput: {
              maxLength: 50,
            },
            input: {
              startAdornment: (
                <S.StyledStartAdornment>Type:</S.StyledStartAdornment>
              ),
            },
          }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </S.StyledContainer>
      <S.StyledContainer>
        <p>Justificativa</p>
        <S.StyledTextfield
          multiline
          slotProps={{
            htmlInput: {
              maxLength: 150,
            },
            input: {
              startAdornment: (
                <S.StyledStartAdornment>
                  Descreva a Justificativa
                </S.StyledStartAdornment>
              ),
            },
          }}
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
        />
      </S.StyledContainer>
    </CustomDialog>
  );
};
