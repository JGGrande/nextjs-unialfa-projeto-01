import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 55px;
  margin: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
    border: 1px solid  var( --black);
    outline: none;
  }
  @media (max-width: 720px) {
    width: calc(100% - 18px);
  }
`
export const FieldSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  gap: 10px;

  select {
    width: calc(100% - 18px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid  var( --black);
    outline: none;
  }

  @media (max-width: 720px) {
    width: calc(100%);
  }
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
    border: 1px solid  var( --black);
    outline: none;
  }
  @media (max-width: 720px) {
    width: calc(100% - 18px);
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
  background: var( --black);
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
