import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../../components/Sidebar/Sidebar';
import { LayoutDashboard, ShoppingBag, Package, Settings, LogOut, LifeBuoy } from 'lucide-react';
import { useAuth } from '../../context/AuthContext/AuthContext';

const DashboardLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar>
                <SidebarItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    active={isActive('/seller-dashboard') || isActive('/buyer-dashboard')}
                    onClick={() => navigate(location.pathname.includes('seller') ? '/seller-dashboard' : '/buyer-dashboard')}
                />
                <SidebarItem
                    icon={<ShoppingBag size={20} />}
                    text="Products"
                    active={isActive('/products')}
                    onClick={() => handleNavigation('/products')}
                />
                <SidebarItem
                    icon={<Package size={20} />}
                    text="Orders"
                    alert
                    active={isActive('/orders')}
                    onClick={() => handleNavigation('/orders')}
                />
                <hr className="my-3 border-gray-200" />
                <SidebarItem
                    icon={<Settings size={20} />}
                    text="Settings"
                    active={isActive('/settings')}
                    onClick={() => handleNavigation('/settings')}
                />
                <SidebarItem
                    icon={<LifeBuoy size={20} />}
                    text="Help"
                    active={isActive('/help')}
                    onClick={() => handleNavigation('/help')}
                />
                <SidebarItem
                    icon={<LogOut size={20} />}
                    text="Logout"
                    onClick={logout}
                />
            </Sidebar>
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
