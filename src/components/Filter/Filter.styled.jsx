import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
export const TitleFilter = styled.p`
  text-align: center;
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
  }
`;
