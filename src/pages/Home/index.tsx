import { useCallback, useEffect, useState } from "react";
import { Menu } from "../../components/menu";
import axios, { AxiosError, CancelTokenSource } from "axios";
import { api } from "../../utils/api";
import { Card } from "../../components/card";

interface IProducts {
  id: number;
  title: string;
  pricing: number;
  promotion: number;
  img: string;
}

export function Home(){
  const [ products, setProducts ] = useState<Array<IProducts>>();

  const getProducts = useCallback(async ( cancelTokenSource: CancelTokenSource ) => {
    const response = await api.get("/products", {
      cancelToken: cancelTokenSource.token
    });

    const productsRequest = response.data as IProducts[]

    setProducts(productsRequest);
  }, [ ]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;

    const cancelTokenSource = CancelToken.source();

    Promise.all([
      getProducts(cancelTokenSource)
    ])
      .catch((error: AxiosError) => {
        if(!axios.isCancel(error)){
          console.error(error)
        }
      });

  },[ getProducts ]);


  return (
    <>
      <Menu />
      <h2>Produtos em destaque:</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {
          products?.map( product => (
            <Card
              key={product.id}
              img={product.img}
              textPricing={product.pricing}
              textPromotion={product.promotion}
              title={product.title}
            />
          ))
        }

      </div>

    </>
  )
}