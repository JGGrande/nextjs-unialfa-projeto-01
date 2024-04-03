import { Form } from "../../components/form";
import { Menu } from "../../components/menu";
import ContactService from "../../services/Contact";

export default function Contact() {

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
              name: "phone",
              type: "tel",
              placeholder: "Telefone"
            }
          ]}
          select={{
            name: "city",
            options: [ "Umuarama", "Tuneiras do Oeste", "Morro cabeça de vento" ],
            label: "Selecione seu município"
          }}
          textArea={{
            placeHolder: "description",
            name: "description"
          }}
        />
      </div>


    </>
  );
}