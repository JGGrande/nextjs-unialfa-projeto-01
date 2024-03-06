import { Form } from "../../components/form";
import { Menu } from "../../components/menu";

export function Contact() {
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
      </div>


    </>
  );
}