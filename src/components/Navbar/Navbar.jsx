import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinkClass = (path) => `
        relative px-1 py-2 text-sm font-medium transition-all duration-300
        ${isActive(path) ? 'text-white' : 'text-gray-400 hover:text-white'}
    `;

    const activeIndicator = (path) => isActive(path) && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <span className="text-xl font-bold text-white">P</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">Pehnoo</h1>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                    <Link to="/" className={navLinkClass('/')}>
                        Home
                        {activeIndicator('/')}
                    </Link>
                    <Link to="/seller-dashboard" className={navLinkClass('/seller-dashboard')}>
                        Seller
                        {activeIndicator('/seller-dashboard')}
                    </Link>
                    <Link to="/buyer-dashboard" className={navLinkClass('/buyer-dashboard')}>
                        Buyer
                        {activeIndicator('/buyer-dashboard')}
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-white/5 rounded-full px-3 py-1.5 border border-white/5 focus-within:border-indigo-500/50 transition-colors">
                        <Search size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:outline-none text-sm text-white placeholder-gray-500 ml-2 w-24 focus:w-40 transition-all duration-300"
                        />
                    </div>

                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <ShoppingBag size={20} />
                    </button>

                    {user ? (
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <div className="hidden md:block text-right">
                                <p className="text-sm font-medium text-white leading-none">{user.displayName || 'User'}</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px]">
                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white">{user?.displayName?.[0]?.toUpperCase() || 'U'}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Login button removed as requested. 
                        // Users can likely navigate via "Seller" or "Buyer" which are protected routes and redirect to login.
                        null
                    )}

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-400 hover:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 space-y-2">
                    <Link to="/" className={`block px-4 py-3 rounded-xl ${isActive('/') ? 'bg-indigo-600/20 text-indigo-400' : 'text-gray-400 hover:bg-white/5'}`}>Home</Link>
                    <Link to="/seller-dashboard" className={`block px-4 py-3 rounded-xl ${isActive('/seller-dashboard') ? 'bg-indigo-600/20 text-indigo-400' : 'text-gray-400 hover:bg-white/5'}`}>Seller</Link>
                    <Link to="/buyer-dashboard" className={`block px-4 py-3 rounded-xl ${isActive('/buyer-dashboard') ? 'bg-indigo-600/20 text-indigo-400' : 'text-gray-400 hover:bg-white/5'}`}>Buyer</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
