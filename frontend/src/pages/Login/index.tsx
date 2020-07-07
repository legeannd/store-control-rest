import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Card, CardHeader, Input } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleSignin(): void{
    alert('clicou no cadastro');
  }

  async function handleLogin(): Promise<void> {

    try {
      const response = await api.post('/user/obtain_token/', {
        username,
        password,
      });

      const token = response.data.token;

      const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      history.push('/dashboard', { headers: headers});

    } catch (err) {
      alert('Usuário ou senha inválidos');
    }

  }


  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <h1>Fazer Login</h1>
          </CardHeader>
          <Input>
            <div className="input-group">
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-group">
              <button onClick={handleSignin}>Cadastre-se</button>
              <button onClick={handleLogin}>Entrar</button>
            </div>
          </Input>
        </Card>
      </Container>
    </>
  )
}

export default Login;
