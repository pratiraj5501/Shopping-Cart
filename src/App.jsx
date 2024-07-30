import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import ProudctList from "./components/proudctList";
import CartLists from "./components/cartList";
import { useState } from "react";
import ProductStore from "./store/productStore";
import CartProvider from "./store/cartStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [cartId, setId] = useState([]);
  return (
    <ProductStore>
      <Header></Header>
      <div className="middleContainer d-flex">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <CartProvider>
          {selectedTab == "Home" ? (
            <ProudctList cartId={cartId} setId={setId}></ProudctList>
          ) : (
            <CartLists></CartLists>
          )}
        </CartProvider>
      </div>
    </ProductStore>
  );
}

export default App;
