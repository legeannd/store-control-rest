import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Header, Body, Card } from './styles';

interface Product {
  id: number;
  title: string;
  quantity: number;
  description: string;
  value: number;
  barcode: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const history = useHistory();
  const storagedSession = sessionStorage.getItem('@StoreControl:headers');
  let authToken = {};
  if ( !storagedSession ) {
    history.replace('/');
  } else {
    authToken = JSON.parse(storagedSession);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts(): Promise<void> {
    const response = await api.get('/api/products/', {headers: authToken});

    setProducts(response.data);
  }

  return (
    <>
      <Container>
        <Header><span>Store Control</span></Header>
        <Body>
          <div className="add-product-btn">
            <button>Cadastrar Produto</button>
          </div>
          {products.map(product => (
            <Card key={product.id}>
              <div className="info-1">
                <span className="title">{product.title}</span>
                <p className="description">{product.description}</p>
              </div>
              <div className="info-2">
                <span className="quantity">Em estoque: {product.quantity}</span>
                <span className="value">Valor: {product.value}</span>
                <span className="barcode">Código de barras: {product.barcode}</span>
              </div>
              <div className="product-btn">
                <button><FiEdit color="green"/></button>
                <button><FiTrash color="red"/></button>
              </div>
            </Card>
          ))}
        </Body>
      </Container>
    </>
  );
}

export default Dashboard;
