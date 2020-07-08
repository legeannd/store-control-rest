import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const storagedSession = sessionStorage.getItem('@StoreControl:headers');
  let authToken = {};
  if ( !storagedSession ) {
    history.replace('/');
  } else {
    authToken = JSON.parse(storagedSession);
  }

  let id = 0;
  try {
    id = location.state.id;
  } catch (err) {
    history.replace('/dashboard');
  }
  useEffect(() => {

  }, []);

  async function loadProduct(): Promise<void> {
    const response = await api.get(`/api/products/${id}/`, {headers: authToken});
    const product = response.data;
    setTitle(product.title);
    setQuantity(product.quantity);
    setDescription(product.description);
    setValue(product.value);
    setBarcode(product.barcode);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  async function handleEditProduct(): Promise<void> {

    const product = {
      title,
      quantity,
      description,
      value,
      barcode
    }

    try {
      await api.put(`/api/products/${id}/`, product, { headers: authToken });
      alert("Produto editado com sucesso");
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
            <CardHeader><h1>Edite os dados do produto</h1></CardHeader>
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
            <button onClick={handleEditProduct}>Editar dados do produto</button>
          </div>
        </Body>
      </Container>
    </>
  );
}

export default Dashboard;
