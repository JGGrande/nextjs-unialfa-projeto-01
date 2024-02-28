import { Form } from "../../components/form";

export function Contact() {
  return (
    <>
      <h2>Quem somos</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita quos minus labore ipsam quis, eos vel pariatur perferendis libero at nesciunt atque facere velit temporibus ipsa saepe magni cupiditate.</p>

      <br />

      <Form
        buttonText="Enviar"
        fields={[
          {
            placeholder: "Email",
            type: "email",
            name: "email",
          },
          {
            name: "telefone",
            type: "tel",
            placeholder: "Telefone"
          }
        ]}
        select={{
          name: "cidade",
          options: [ "Umuarama", "Tuneiras do Oeste", "Morro cabeça de vento" ],
          label: "Seleciona um município"
        }}
        textArea={{
          placeHolder: "Descrição",
          name: "descricao"
        }}
      />

    </>
  );
}