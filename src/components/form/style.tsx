import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 25px;
  margin: 25px;
  box-shadow: 0 2px 5px #f5f5f5;
  background: #f5f5f5;
`

export const FieldInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  input {
    width: calc(100% - 18px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #1c87c9;
    outline: none;
  }
`
export const FieldSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  padding: 10px;
`
export const FieldTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;

  textarea {
    width: calc(100% - 18px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #1c87c9;
    outline: none;
  }
`

export const ButtonContainer = styled.div`
  padding: 8px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonForm = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: none;
  background: #1c87c9;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
