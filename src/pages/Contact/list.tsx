import { useCallback, useEffect, useState } from "react";
import ContactService from "../../services/Contact";
import { Menu } from "../../components/menu";
import { useNavigate } from "react-router-dom";

interface IContact {
  id: string;
  email: string;
  number: string;
  city: string;
  description: string;
}

export default function ListContacts(){

  const navigate = useNavigate();

  const [contacts, setContacts ] = useState<IContact[]>([]);

  const getContacts = useCallback(() => new ContactService().findMany(), [ ]);

  const handleClickOnContact = useCallback((id: string) => navigate(`/contacts/${id}`), [ navigate ])

  useEffect(()=>{
    getContacts()
      .then(contacts => setContacts(contacts))
      .catch(error => console.error(error))

  }, [ getContacts ]);

  return(
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          gap: "18px",
          marginTop: "20px"
        }}
      >
        {contacts?.map(contact => (
          <div
            key={contact.id}
            style={{
              padding: "10px",
              border: "1px solid black",
              cursor: "pointer"
            }}
            onClick={() => handleClickOnContact(contact.id)}
          >
            <h1>{contact.email}</h1>
            <h2>{contact.city}</h2>
          </div>
        ))}

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          gap: "18px",
          marginTop: "20px"
        }}
      >
         <button
            onClick={() => navigate('/contact')}
            style={{
              appearance: "button",
              backfaceVisibility: "hidden",
              backgroundColor: "#405cf5",
              borderRadius: "6px",
              borderWidth: "0",
              boxShadow: "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
              boxSizing: "border-box",
              color: "#fff",
              cursor: "pointer",
              fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
              fontSize: "100%",
              height: "44px",
              lineHeight: "1.15",
              margin: "12px auto",
              outline: "none",
              overflow: "hidden",
              padding: "0 25px",
              position: "relative",
              textAlign: "center",
              textTransform: "none",
              transform: "translateZ(0)",
              transition: "all .2s,box-shadow .08s ease-in",
              userSelect: "none",
              touchAction: "manipulation",
              width: "250px",
            }}
          >
            Criar
          </button>
      </div>




    </>
  )
}