import { api } from "../../utils/api";
import { CancelTokenSource } from "axios";

interface IProductsRequests {
  id: number;
  title: string;
  category_id: number;
  pricing: number;
  promotion: number;
  image_g: string;
  image_p: string;
}

export default class HomeService {

  public async getProducts( cancelTokenSource: CancelTokenSource ){
    const response = await api.get("/products", {
      cancelToken: cancelTokenSource.token
    });

    const productsRequest: IProductsRequests[] = response.data;

    return productsRequest;
  }

}