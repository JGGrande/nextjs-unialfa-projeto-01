import { useParams } from "react-router-dom"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles";

export default function ProductsDetails(){

  const { id } = useParams();

  return(
    <>
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <Row>
          <Col4>
          <img
            style={{
              width: '100%'
            }}
            src={``}
          />
          </Col4>
          <Col6>
            <h3>Tv top para taticas de futebol</h3>
            <p
              style={{
                textDecoration: 'line-through'
              }}
            >
              R$ 1.500,00
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              R$ 1.100,00
            </p>

            <form>
              <Input
                type="number"
                name="quantidade"
                defaultValue={1}
                min={1}
                required
              />
              <Button>
                <TextButton>
                  Adicionar ao carrinho
                </TextButton>
              </Button>
            </form>
          </Col6>
        </Row>
      </div>
    </>
  )
}