import { FormEvent, HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";
import { ButtonContainer, ButtonForm, FieldInputContainer, FieldSelectContainer, FieldTextAreaContainer, FormContainer } from "./style";

interface IFieldInput {
  label?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute
  name: string;
  style?: CSSProperties;
}
interface IFieldTextArea {
  label?: string;
  style?: CSSProperties;
  name: string;
  placeHolder?: string;
}
interface IFieldSelect {
  options: string[]
  label?: string;
  style?: CSSProperties;
  name: string;
}

interface IFormProps {
  fields: IFieldInput[];
  buttonText: string;
  textArea?: IFieldTextArea;
  select?: IFieldSelect;
}

export const Form = ({ fields, buttonText, select, textArea }: IFormProps) => {

  const handleSubmitForm = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    window.alert("Enviado")
  }

  return (
    <FormContainer
      onSubmit={handleSubmitForm}
    >
      <FieldInputContainer>
        {fields.map( field =>
          <>
            { field.label
              ?
                (
                  <label>
                    {field.label}
                  </label>
                )
              :
              (<></>)
            }
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              style={field.style}
              required
            />
          </>
        )}
      </FieldInputContainer>

      { select ? (
        <FieldSelectContainer>
          { select.label ?( <label>{select.label}</label> ) : (<></>) }

          <select name={select.name}>
            { select.options.map( option => (
              <option>
                {option}
              </option>
            )) }
          </select>

        </FieldSelectContainer>
      ) : (<></>) }

      { textArea ? (
        <FieldTextAreaContainer>
          { textArea.label ?
            (
              <>
              <label htmlFor={textArea.name}>{textArea.label}</label>
              </>
            ) : (<></>)
          }
          <textarea placeholder={textArea.placeHolder} name={textArea.name}></textarea>
        </FieldTextAreaContainer>
      ) : (<></>) }

      <ButtonContainer>
        <ButtonForm
          type="submit"
          name="button"
        >
          {buttonText}
        </ButtonForm>
      </ButtonContainer>

    </FormContainer>
  )
}