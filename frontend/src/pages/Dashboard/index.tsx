import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

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
    try {
      const response = await api.get('/api/products/', {headers: authToken});
      setProducts(response.data);
    } catch (err) {
      alert(err);
    }
  }

  async function handleDeleteProduct(id: number): Promise<void> {
    try {
      await api.delete(`/api/products/${id}`, {headers: authToken});
      const productsUpdated = products.filter(product => product.id !== id);
      setProducts(productsUpdated);
    } catch (err) {
      alert(err);
    }
  }

  function handleEditProduct(id: number): void {
    history.push('/edit-product', {id});
  }

  function handleCreateProduct(): void {
    history.push('/create-product')
  }

  function handleLogout(): void {
    sessionStorage.clear();
    history.replace('/');
  }


  return (
    <>
      <Container>
        <Header><span>Store Control</span></Header>
        <Body>
          <div className="add-product-btn">
            <button onClick={handleCreateProduct}>Cadastrar Produto</button>
          </div>
          {products.length === 0 ? (
            <Card>
              <div className="info-1">
                <span className="title">Nenhum produto cadastrado. Cadastre um produto para utilizar o sistema</span>
              </div>
            </Card>
          ) : ''}
          {products.map(product => (
            <Card key={product.id}>
              <div className="info-1">
                <span className="title">{product.title}</span>
                <p className="description">{product.description}</p>
              </div>
              <div className="info-2">
                <span className="quantity">Em estoque: {product.quantity}</span>
                <span className="value">Valor: {formatValue(product.value)}</span>
                <span className="barcode">Código de barras: {product.barcode}</span>
              </div>
              <div className="product-btn">
                <button onClick={() => handleEditProduct(product.id)}><FiEdit color="green"/></button>
                <button onClick={() => handleDeleteProduct(product.id)}><FiTrash color="red"/></button>
              </div>
            </Card>
          ))}
          <div className="logout-btn">
            <button onClick={handleLogout}>Sair</button>
          </div>
        </Body>
      </Container>
    </>
  );
}

export default Dashboard;
