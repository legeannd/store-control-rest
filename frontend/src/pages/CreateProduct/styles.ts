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

  .create-btn {
    max-width: 1120px;
    margin: 100px 0;
    display: flex;
    flex: 1 0 100%;
    justify-content: flex-end;
  }
`;

export const Card = styled.div`
  width: 1120px;
  background: #FFF;
  border: 0px solid;
  border-radius: 5px;

`;
export const CardHeader = styled.div`
  width: 1120px;
  height: 150px;
  background: #F0F2F5;
  border: 0px solid;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  padding: 0 0 0 40px;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const Input = styled.div`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0 0 0;

  }

  input, textarea {
    width: 1000px;
    height: 60px;
    background: rgba(236, 240, 241, 0.1);
    font-family: inherit;
    font-weight: normal;
    font-size: 24px;
    color: #000;
    border: 0px solid;
    border-radius: 5px;
    caret-color: #000;
    padding: 16px;
    margin-bottom: 50px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }

  }

  textarea {
    height: 180px;
    resize: none;
  }

  .info-block {
      width: 1000px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      input {
        width: 450px;
      }
    }
`;
