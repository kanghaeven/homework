import { Route, Routes } from "react-router-dom";
import ShoppingListPage from "./pages/ShoppingListPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Error404Page from "./pages/Error404Page";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<ShoppingListPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
