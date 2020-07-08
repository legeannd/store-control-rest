import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Header, Body, Card, CardHeader, Input } from './styles';

interface Product {
  id: number;
  title: string;
  quantity: number;
  description: string;
  value: number;
  barcode: string;
}

const Dashboard: React.FC = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [barcode, setBarcode] = useState('');

  const history = useHistory();
  const storagedSession = sessionStorage.getItem('@StoreControl:headers');
  let authToken = {};
  if ( !storagedSession ) {
    history.replace('/');
  } else {
    authToken = JSON.parse(storagedSession);
  }

  async function handleCreateProduct(): Promise<void> {
    if ( !title || !quantity || !description || !value || !barcode ) {
      alert('Digite todos os campos do produto');
    }

    const product = {
      title,
      quantity,
      description,
      value,
      barcode
    }

    try {
      const response = await api.post('api/products/', product, { headers: authToken });
      alert("Produto adicionado: "+response.data.title);
      history.push('/dashboard');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Container>
        <Header><span>Store Control</span></Header>
        <Body>
          <Card>
            <CardHeader><h1>Digite os dados do produto</h1></CardHeader>
            <Input>
            <div className="input-group">
              <input
                placeholder="Nome do produto"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                placeholder="Quantidade"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <textarea
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="info-block">
                <input
                  placeholder="Valor"
                  type="number"
                  step="0.01"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <input
                  placeholder="Código de barras"
                  type="text"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                />
              </div>
            </div>
          </Input>
          </Card>
          <div className="create-btn">
            <button onClick={handleCreateProduct}>Cadastrar produto</button>
          </div>
        </Body>
      </Container>
    </>
  );
}

export default Dashboard;
