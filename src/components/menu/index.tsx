import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from "./styles";
import { FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

interface IDataCategory {
  id: number;
  name: string;
}

export const Menu = () => {
  const [ extendsNavbar, setExtendsNavbar ] = useState(false);
  const [ dataCategory, setDataCategory ] = useState<Array<IDataCategory>>([]);

  useEffect(() => {
    setDataCategory([
      {
        id: 1,
        name: "Eletronicos"
      },
      {
        id: 2,
        name: "Moveis"
      }
    ])
  }, []);


  return (
    <>
      <NavbarContainer
        extendNavbar={extendsNavbar}
      >
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => setExtendsNavbar(value => !value)}
              >
                { extendsNavbar ? <>&#10005;</> : <>&#8801;</> }
              </OpenLinksButton>
              <NavbarLinkExtended
                style={{
                  fontWeight: "bold",
                  color: "#fff"
                }}
                to="/"
              >
                1Pitchau
              </NavbarLinkExtended>
              <NavbarLink to={"/"}>Home</NavbarLink>
              {
                dataCategory.map( category => (
                  <NavbarLink to={`/categoy/${category.id}`}>
                    {category.name}
                  </NavbarLink>
                ))
              }
            </NavbarLinkContainer>
          </LeftContainer>

          <RightContainer>
            <NavbarLink
              to={"/cart"}
            >
              <FaShoppingCart size={22} />
            </NavbarLink>
            <NavbarLink
              to={"/products"}
            >
              <FaShoppingBag size={22} />
            </NavbarLink>
            <NavbarLink
              to={"/contact"}
            >
              <FaMailBulk size={22} />
            </NavbarLink>
          </RightContainer>
        </NavbarInnerContainer>

        {
          extendsNavbar && (
            <>
              <NavbarExtendedContainer>
                <NavbarLinkExtended to={"/"}>
                  Home
                </NavbarLinkExtended>
                {
                  dataCategory.map( category => (
                    <NavbarLinkExtended to={`/categoy/${category.id}`}>
                      {category.name}
                    </NavbarLinkExtended>
                  ))
                }
              </NavbarExtendedContainer>
            </>
          )
        }

      </NavbarContainer>
    </>
  );
}