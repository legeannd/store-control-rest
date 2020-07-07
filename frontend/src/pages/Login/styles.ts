import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 720px;
  height: 720px;
  background: #FFF;
  border: 0px solid;
  border-radius: 5px;

`;
export const CardHeader = styled.div`
  width: 720px;
  height: 150px;
  background: #e74c3c;
  border: 0px solid;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  padding: 0 0 0 40px;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 64px;
    color: #fff;
  }
`;
export const Input = styled.div`

  padding: 0 10px;

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 200px;
  }

  input {
    width: 600px;
    height: 60px;
    background: rgba(236, 240, 241, 0.1);
    font-weight: normal;
    font-size: 24px;
    color: #000;
    border: 0px solid;
    border-radius: 5px;
    caret-color: #000;
    padding: 16px;

    & + input {
      margin: 50px 0;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.1);
    }
  }

  .button-group {
    display: flex;
    justify-content: space-around;
  }

  button {
    width: 250px;
    height: 60px;
    background: #e74c3c;
    border: 0px solid;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;

  }
`;
