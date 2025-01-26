import { useOrdersServices } from 'services/orders';
import * as S from './styles';
import { useEffect } from 'react';

type DataInfoType = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

export const DataInfo = ({
  code,
  setCode,
  description,
  setDescription,
  type,
  setType,
}: DataInfoType) => {
  const { getLatestOrder } = useOrdersServices();

  useEffect(() => {
    const getLastOrder = async () => {
      try {
        const order = await getLatestOrder();
        if (order) {
          setCode(order.code);
          setDescription(order.description);
          setType(order.type);
        }
      } catch (error) {
        setCode('');
        setDescription('');
        setType('');
      }
    };
    getLastOrder();
  }, []);

  return (
    <S.StyledContainer>
      <S.StyledTextfield
        width={125}
        slotProps={{
          input: {
            startAdornment: (
              <S.StyledStartAdornment>Código</S.StyledStartAdornment>
            ),
          },
        }}
        value={code}
        onChange={(e) => setCode(e.target.value.toString().slice(0, 3))}
      />
      <S.StyledTextfield
        width={246}
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
        width={246}
        slotProps={{
          htmlInput: {
            maxLength: 50,
          },
          input: {
            startAdornment: (
              <S.StyledStartAdornment>Tipo:</S.StyledStartAdornment>
            ),
          },
        }}
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
    </S.StyledContainer>
  );
};
