import { useCallback, useEffect, useState } from "react";
import { Menu } from "../../components/menu";
import axios, { AxiosError, CancelTokenSource } from "axios";
import { Card } from "../../components/card";
import HomeService from "../../services/Home";

interface IProducts {
  id: number;
  title: string;
  category_id: number;
  pricing: number;
  promotion: number;
  image_g: string;
  image_p: string;
}

export function Home(){
  const [ products, setProducts ] = useState<Array<IProducts>>();

  const getProducts = useCallback(async( cancelTokenSource: CancelTokenSource, homeService: HomeService ) => {
    const products = await homeService.getProducts(cancelTokenSource);

    setProducts(products);
  }, [ ]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const cancelTokenSource = CancelToken.source();

    const homeService = new HomeService();

    Promise.all([
      getProducts(cancelTokenSource, homeService)
    ])
      .catch((error: AxiosError) => {
        if(!axios.isCancel(error)){
          console.error(error)
        }
      });


    return () => {
      cancelTokenSource.cancel("Component unmounted");
    }
  },[ getProducts ]);


  return (
    <>
      <Menu />
      <h2>Produtos em destaque:</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {
          products?.map( product => (
            <Card
              key={product.id}
              img={`https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/${product.image_p}`}
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