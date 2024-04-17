import { useNavigate, useParams } from "react-router-dom"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { ICart, IProducts } from "../../types";

type FormTargetType = EventTarget & {
  quantity: { value: number }
}

export default function ProductsDetails(){

  const { id } = useParams();

  const navigate = useNavigate();

  const [ product, setProduct ] = useState<IProducts>();

  const onSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as FormTargetType;

    if(product){
      const quantity = target.quantity.value;

      if(quantity){
        const productData = {
          ...product,
          quantity,
          totalPricing: +product.pricing * quantity,
          totalPromotion: +product.promotion * quantity
        }

        const cartLocalStorage = localStorage.getItem("@1pitchau:cart");

        let cart: ICart[] = []

        if(cartLocalStorage){
          //pega os que já existe adiciona no final
          const cartLs = JSON.parse(cartLocalStorage) as ICart[];

          const productAlreadyExitsOnCart = cartLs.find(cart => cart.id === productData.id);

          if(productAlreadyExitsOnCart){
            const newQuantity = +productData.quantity + Number(productAlreadyExitsOnCart.quantity);

            productAlreadyExitsOnCart.quantity = newQuantity;
            productAlreadyExitsOnCart.totalPricing = +productData.totalPricing * newQuantity;
            productAlreadyExitsOnCart.totalPromotion = +productData.totalPromotion * newQuantity;

          }else {
            cartLs.push(productData);
          }

          cart = cartLs;
        }else {
          //cria o nove produto no carriho
          cart = [ productData ];
        }

        const cartStringfied = JSON.stringify(cart);

        localStorage.setItem("@1pitchau:cart", cartStringfied);

        navigate('/cart');
      }
    }

  }, [ product, navigate ]);

  useEffect(() => {

    api.get(`/products?id=${id}`)
      .then(product => {
        setProduct(product.data[0])
      })
      .catch(error => console.error(error))

  },[ id ]);

  if(!product){
    return (<>Nenhum produto encontrado!</>)
  }

  return(
    <>
      <h1>Produto</h1>
        <Row>
          <Col4>
            <img
              style={{
                width: "100%"
              }}
              src={`https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/${product.image_g}`}
            />
          </Col4>
          <Col6>
            <h3>{product.name}</h3>
            <p
              style={{
                textDecoration: 'line-through'
              }}
            >
              { formatCurrency(product.promotion) }
            </p>
            <form
              onSubmit={onSubmit}
            >
              <Input
                type="number"
                name="quantity"
                defaultValue={1}
                min={1}
                required
              />
              <Button>
                <TextButton>Adicionar ao carrinho</TextButton>
              </Button>
            </form>
          </Col6>
     </Row>
    </>
  )
}