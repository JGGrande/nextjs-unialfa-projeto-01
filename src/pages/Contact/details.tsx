import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ContactService from "../../services/Contact";
import { Menu } from "../../components/menu";

interface IContact {
  id: string;
  email: string;
  phone: string;
  city: string;
  description: string;
}

export default function DetailsContact(){
  const { id } = useParams();

  const [ contact, setContact ] = useState<IContact>();

  const getContact = useCallback((id: string) => new ContactService().findById(id), [ ]);

  useEffect(() => {
    getContact(id!)
      .then(contacts => setContact(contacts))
      .catch(error => console.error(error))
  }, [ getContact, id ])


  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <h1>{contact?.email}</h1>
        <h1>{contact?.city}</h1>
        <h1>{contact?.phone}</h1>
        <h1>{contact?.description}</h1>
      </div>
    </>
  )
}