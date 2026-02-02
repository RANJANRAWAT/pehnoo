import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import { AuthProvider } from './context/AuthContext/AuthContext';
import { CartProvider } from './context/CartContext/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes with Navbar */}
            <Route element={<><Navbar /><Outlet /></>}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Protected Dashboard Routes with Sidebar */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="/seller-dashboard" element={<SellerDashboard />} />
              <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings</h1><p>Account settings.</p></div>} />
              <Route path="/help" element={<div className="p-8"><h1 className="text-2xl font-bold">Help Center</h1><p>How can we help you?</p></div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
