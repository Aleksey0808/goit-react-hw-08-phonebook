import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  &::placeholder {
    color: #000000;
    font-style: italic;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  font-size: 15px;
`;
