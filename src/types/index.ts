export interface IProducts {
  id: number;
  name: string;
  category_id: number;
  pricing: number;
  promotion: number;
  image_g: string;
  image_p: string;
}

export interface ICart extends IProducts {
  quantity: number;
  totalPricing: number;
  totalPromotion: number;
}
