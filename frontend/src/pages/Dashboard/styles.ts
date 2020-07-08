import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  button {
    width: 250px;
    height: 60px;
    background: #e74c3c;
    border: 0px solid;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    transition: background .2s;

    &:hover {
      background: rgba(231, 76, 60, 0.8);
    }
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 200px;
  background: #e74c3c;
  font-weight: bold;
  font-size: 48px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 1120px;
    display: flex;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .add-product-btn {
    max-width: 1120px;
    margin: 100px 0;
    display: flex;
    flex: 1 0 100%;
    justify-content: flex-end;

  }
`;

export const Card = styled.div`
  width: 1120px;
  max-height: 300px;
  background: #fff;
  border: 0px solid;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  & {
    margin-bottom: 10px;
  }

  .info-1 {
    width: 600px;
    margin: 20px 0 20px 40px;
  }

  .info-2 {
    margin: 20px 0;
    max-width: 200px;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    font-weight: bold;
    text-align: right;
  }

  .product-btn {
    margin: 20px 40px 0 0;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .title {
    font-weight: bold;
    font-size: 30px;
  }

  .description {
    margin-top: 10px;
    font-size: 18px;
    line-height: 2rem;
  }

  .quantity, .value, .barcode {
    width: 200px;
    padding: 10px 0;
  }

  button {
    width: 60px;
    height: 60px;
    background: #fff;
    border: 1px solid #e74c3c;
    transition: background .2s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

`;
