import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Component/Navbar.jsx";
import Login from "./assets/Pages/Login.jsx";
import Menu from "./assets/Pages/Menu.jsx";
import TransactionCustomer from "./assets/Pages/Transaction.jsx";
import Payment from "./assets/Pages/Payment.jsx";
import NotFoundPage from "./assets/Pages/Notfound.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transaction" element={<TransactionCustomer />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
