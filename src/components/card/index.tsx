import { formatCurrency } from "../../utils/formatCurrency";
import { Button, CardBody, ImageCard, ImageContainer, TextButton, TextPricing, TextPromotion, Title } from "./style";

interface ICard {
  key: number;
  title: string;
  textPricing: number;
  textPromotion: number;
  img: string;
}

export const Card = ({ key, img, title, textPricing, textPromotion }: ICard) => {

  return(
    <>
      <CardBody key={key}>

        <ImageContainer>
          <ImageCard src={img} alt={title} />
        </ImageContainer>

        <Title>{title}</Title>
        <TextPricing>{formatCurrency(textPricing)}</TextPricing>
        <TextPromotion>{formatCurrency(textPromotion)}</TextPromotion>

        <Button>
          <TextButton>Detalhes</TextButton>
        </Button>

      </CardBody>
    </>
  )
}