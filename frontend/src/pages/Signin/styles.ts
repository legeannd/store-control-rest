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

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0 0 0;

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
    margin-bottom: 50px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }

  }

  .name-block, .password-block {
      width: 600px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      input {
        width: 250px;
      }
    }


  .button-group {
    width: 600px;
    margin-bottom: 50px;
    display: flex;
    justify-content: flex-end;
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
    transition: background .2s;

    &:hover {
      background: rgba(231, 76, 60, 0.8);
    }
  }
`;
