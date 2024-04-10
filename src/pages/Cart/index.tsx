import { FaTrash } from "react-icons/fa";
import { Menu } from "../../components/menu";
import { Button, Table, TBTr, Td, TextButton, THTh, THtr } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { ICart } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";

export function Cart(){

  const [cart, setCart] = useState<ICart[]>();

  const [totalPricing, setTotalPricing] = useState<number>(0);

  const updateTotal = useCallback(() => {
    if(cart?.length){
      const totalPricingCalculated = cart.reduce((total, product) => {
        return product.totalPricing + total
      }, totalPricing);

      setTotalPricing(totalPricingCalculated);
    }
  }, [ cart, totalPricing ])

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("@1pitchau:cart")

    let cartLs: ICart[] = []

    if(cartLocalStorage){
      cartLs = JSON.parse(cartLocalStorage);
      setCart(cartLs);
    }

    updateTotal()

  },[ updateTotal ]);

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h2>Carrinho de compras</h2>

        <Table>
          <thead>
            <THtr>
              <THTh
                style={{
                  minWidth: 300
                }}
              >Nome do produto</THTh>
              <THTh>Quantidade</THTh>
              <THTh>Vlr. Unit.</THTh>
              <THTh>Vlr. Total.</THTh>
              <THTh>Ações</THTh>
            </THtr>
          </thead>
          <tbody>
            {
              cart?.map( cart => {
                return (
                  <TBTr>
                    <Td width={300}>{cart.name}</Td>
                    <Td>{cart.quantity}</Td>
                    <Td>{formatCurrency(cart.totalPromotion)}</Td>
                    <Td>{formatCurrency(cart.totalPricing)}</Td>
                    <Td>
                      <Button
                        type="button"
                      >
                        <TextButton>
                          <FaTrash />
                        </TextButton>
                      </Button>
                    </Td>
                  </TBTr>
                );
              })
            }
          </tbody>
          <tfoot>
            <TBTr>
              <Td width={300}>Valor Total:</Td>
              <Td></Td>
              <Td></Td>
              <Td
                style={{
                  fontWeight: "bold"
                }}
              >{formatCurrency(totalPricing)}</Td>
              <Td></Td>
            </TBTr>
          </tfoot>
        </Table>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            type="button"
          >
            <TextButton>Limpar Carrinho</TextButton>
          </Button>
          <Button
            type="button"
            bgColor="green"
          >
            <TextButton>Finalizar Pedido</TextButton>
          </Button>
        </div>
      </div>
    </>
  )
}