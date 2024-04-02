import { Form } from "../../components/form";
import { Menu } from "../../components/menu";
import ContactService from "../../services/Contact";

export function Contact() {

  const contactService = new ContactService();

  return (
    <>
      <Menu />

      <h1 style={{ textAlign: "center" }}>Nos contate</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "space-around"
        }}
      >

        <Form
          buttonText="Enviar"
          sendToApi={contactService.create}
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
            label: "Selecione seu município"
          }}
          textArea={{
            placeHolder: "Descrição",
            name: "descricao"
          }}
        />
      </div>


    </>
  );
}