import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import Contact  from "./pages/Contact";
import ProductsDetails from "./pages/ProductsDetails";
import ListContacts from "./pages/Contact/list";
import DetailsContact from "./pages/Contact/details";

export function RoutesMapping() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacts" element={<ListContacts />} />
          <Route path="/contacts/:id" element={<DetailsContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}