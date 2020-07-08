import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Card, CardHeader, Input } from './styles';

const Signin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const storagedHeader = sessionStorage.getItem('@StoreControl:headers');

  if ( storagedHeader ) {
    history.replace('/dashboard', { headers: storagedHeader })
  }

  async function handleSignin(): Promise<void> {

    if ( !username || !email || !name || !secondName || !password || !confirmPassword ) {
      alert("Digite todos os dados de cadastro!");
      return;
    }

    if ( password !== confirmPassword ) {
      alert("As senhas precisam ser iguais");
      return;
    }

    try {
      const response = await api.post('/user/create/', {
        username,
        email,
        first_name: name,
        last_name: secondName,
        password,
      });

      alert("O usuário "+ response.data.username+" foi criado com sucesso!");

      history.replace('/');

    } catch (err) {
      alert(err);
    }

  }

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <h1>Cadastre-se</h1>
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
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="name-block">
                <input
                  placeholder="Nome"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Sobrenome"
                  type="text"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                />
              </div>
              <div className="password-block">
                <input
                  placeholder="Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  placeholder="Confirmar senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="button-group">
              <button onClick={handleSignin}>Cadastre-se</button>
            </div>
          </Input>
        </Card>
      </Container>
    </>
  )
}

export default Signin;
