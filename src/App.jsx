
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/cart" element={<CartItem></CartItem>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
