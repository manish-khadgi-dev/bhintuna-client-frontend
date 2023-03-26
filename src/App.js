import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LandingPage } from "./pages/landing-page/LandingPage";

import { LoginPage } from "./pages/login-page/LoginPage";
import { EmailVerify } from "./pages/verify/EmailVerify";
import { ResetPassword } from "./pages/reset-password/ResetPassword";
import { Registration } from "./pages/register/Registration";
import { Category } from "./pages/category/Category";
import { Products } from "./pages/products/Products";
import { PaymentOptions } from "./pages/payment-options/PaymentOptions";
import { Setting } from "./pages/setting/Setting";
import { Orders } from "./pages/orders/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public routes */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="email-verify" element={<EmailVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* private routs */}
          <Route path="register" element={<Registration />} />

          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment-options" element={<PaymentOptions />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
