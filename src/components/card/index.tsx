import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button, CardBody, ImageCard, ImageContainer, TextButton, TextPricing, TextPromotion, Title } from "./style";

interface ICard {
  key: number;
  title: string;
  textPricing: number;
  textPromotion: number;
  img: string;
  toUrl: string;
}

export const Card = ({ key, img, title, textPricing, textPromotion, toUrl }: ICard) => {
  const navigate = useNavigate();

  return(
    <>
      <CardBody key={key}>

        <ImageContainer>
          <ImageCard src={img} alt={title} />
        </ImageContainer>

        <Title>{title}</Title>
        <TextPricing>{formatCurrency(textPricing)}</TextPricing>
        <TextPromotion>{formatCurrency(textPromotion)}</TextPromotion>

        <Button
          onClick={() => navigate(toUrl)}
        >
          <TextButton>Detalhes</TextButton>
        </Button>

      </CardBody>
    </>
  )
}