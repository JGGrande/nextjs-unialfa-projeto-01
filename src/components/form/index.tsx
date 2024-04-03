import { FormEvent, HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";
import { ButtonContainer, ButtonForm, FieldInputContainer, FieldSelectContainer, FieldTextAreaContainer, FormContainer } from "./style";
import { useNavigate } from "react-router-dom";

interface IFieldInput<T>{
  label?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute
  name: string;
  style?: CSSProperties;
  value?: string | number;
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
  fields: IFieldInput<string | number>[];
  buttonText: string;
  textArea?: IFieldTextArea;
  select?: IFieldSelect;
  sendToApi: (data: any) => Promise<void>;
}

export const Form = ({ fields, buttonText, select, textArea, sendToApi }: IFormProps) => {

  const navigation = useNavigate();

  const handleSubmitForm = async ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const formData = {} as Record<string, string | number>;
    const formElements:any = event.target;

    fields.forEach(field => {
      const input = formElements.elements.namedItem(field.name) as HTMLInputElement;
      formData[field.name] = input.value;
    });

    if(select){
      const $select = formElements.elements.namedItem(select.name) as HTMLSelectElement;
      formData[select.name] = $select.value;
    }

    if(textArea){
      const $textArea = formElements.elements.namedItem(textArea.name) as HTMLTextAreaElement;
      formData[textArea.name] = $textArea.value;
    }

    await sendToApi(formData);

    navigation("/contacts")
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