
import { useCallback, useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from "./styles";
import { FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { api } from "../../utils/api";
import axios, { AxiosError, CancelTokenSource } from "axios";

interface ICategory {
  id: number;
  name: string;
}

export const Menu = () => {
  const [ extendsNavbar, setExtendsNavbar ] = useState(false);
  const [ categories, setCategories ] = useState<Array<ICategory>>([]);

  const getCategories = useCallback(async( cancelTokenSource: CancelTokenSource ) => {
    const response = await api.get("/categories", {
      cancelToken: cancelTokenSource.token
    });

    const categorisResponse = response.data as ICategory[];

    setCategories(categorisResponse);
  }, [  ]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;

    const cancelTokenSource = CancelToken.source()

    Promise.all([
      getCategories(cancelTokenSource)
    ])
      .catch((error: AxiosError) => {
        if(!axios.isCancel(error)){
          console.error(error)
        }
      })

    return () => {
      cancelTokenSource.cancel("Component unmounted")
    }

  }, [ getCategories ]);


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
                categories?.map( category => (
                  <NavbarLink key={category.id} to={`/categoy/${category.id}`}>
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
              to={"/contacts"}
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
                  categories.map( category => (
                    <NavbarLinkExtended key={category.id}  to={`/categoy/${category.id}`}>
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