import { FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { HeaderContainer, LinksContainer } from "./style"


export const Header = () => (
  <HeaderContainer>
    <h1 style={{
      fontSize: "6vh"
    }}>
      1 pitchau
    </h1>

    <LinksContainer>
      <a href="/">{<FaHome  />} Home</a>

      <a href="/cart">{<FaShoppingCart />} Cart</a>

      <a href="/products">{<FaShoppingBag />} Products</a>

      <a href="/contact">{<FaMailBulk />} Contato</a>

    </LinksContainer>

  </HeaderContainer>
)