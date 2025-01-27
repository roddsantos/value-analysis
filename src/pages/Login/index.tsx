import SupplyChainImg from '../../assets/supply-chain.png';
import KodigosImg from '../../assets/kodigos-big.png';
import * as S from './styles';
import { useState } from 'react';
import { Button } from 'components/Button';
import { useNavigation } from 'utils/navigation';
import { useUserContext } from 'contexts/user';

export const LoginPage = () => {
  const { goTo } = useNavigation();
  const { setUser } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    setUser(username);
    goTo('/');
  };

  return (
    <S.CustomContainer>
      <S.StyledContainer>
        <S.StyledChainImage src={SupplyChainImg} />
        <S.StyledLoginInfo>
          <S.StyledKodigosImage src={KodigosImg} />
          <S.StyledTextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            slotProps={{
              htmlInput: {
                maxLength: 20,
              },
              input: {
                endAdornment: (
                  <S.StyledEndAdornment className="bx bxs-user-circle" />
                ),
              },
            }}
          />
          <S.StyledTextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            slotProps={{
              htmlInput: {
                maxLength: 24,
              },
              input: {
                type: showPass ? 'text' : 'password',
                endAdornment: (
                  <S.StyledEndAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowPass((state) => !state)}
                    className={showPass ? 'bx bx-lock-open' : 'bx bxs-lock'}
                  />
                ),
              },
            }}
          />
          <Button
            style={{ width: '281px', marginTop: '38px', height: '51px' }}
            title="Acessar"
            types="primary"
            disabled={username.length == 0 || password.length == 0}
            onClick={() => handleLogin()}
          />
        </S.StyledLoginInfo>
      </S.StyledContainer>
    </S.CustomContainer>
  );
};
