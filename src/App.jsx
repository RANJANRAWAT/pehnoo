import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import { AuthProvider } from './context/AuthContext/AuthContext';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/products" element={<div className="p-8"><h1 className="text-2xl font-bold">Products</h1><p>Manage your products here.</p></div>} />
            <Route path="/orders" element={<div className="p-8"><h1 className="text-2xl font-bold">Orders</h1><p>Track your orders here.</p></div>} />
            <Route path="/settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings</h1><p>Account settings.</p></div>} />
            <Route path="/help" element={<div className="p-8"><h1 className="text-2xl font-bold">Help Center</h1><p>How can we help you?</p></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
