import { motion } from 'framer-motion';
import { Search, Bell, Mail, ChevronDown, Package, Heart, ShoppingBag, CreditCard, MoreHorizontal, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext/AuthContext';

const BuyerDashboard = () => {
    const { user } = useAuth();

    // Fallback Image Handler
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300";
    };

    // Mock Data for Buyer
    const stats = [
        { label: "Total Orders", value: "24", icon: <Package size={20} className="text-blue-600" />, bg: "bg-blue-100" },
        { label: "Wishlist", value: "12", icon: <Heart size={20} className="text-red-500" />, bg: "bg-red-100" },
        { label: "In Cart", value: "3", icon: <ShoppingBag size={20} className="text-yellow-600" />, bg: "bg-yellow-100" },
        { label: "Total Spent", value: "₹45,200", icon: <CreditCard size={20} className="text-emerald-600" />, bg: "bg-emerald-100" },
    ];

    // Reliable Image URLs
    const productImages = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1529139574466-a302d2752424?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1550614000-4b9519e090f2?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=200"
    ];

    const recentOrders = [
        { id: "#ORD-7752", product: "Vintage Denim Jacket", img: productImages[8], date: "2 Feb 24", price: "₹2,400", status: "In Transit" },
        { id: "#ORD-7751", product: "Urban Cargo Pants", img: productImages[1], date: "28 Jan 24", price: "₹1,800", status: "Delivered" },
        { id: "#ORD-7750", product: "Oversized Hoodie", img: productImages[2], date: "25 Jan 24", price: "₹3,200", status: "Delivered" },
        { id: "#ORD-7749", product: "Classic White Sneakers", img: productImages[5], date: "20 Jan 24", price: "₹4,500", status: "Cancelled" },
    ];

    const recommendations = [
        { name: "Leather Crossbody Bag", price: "₹1,200", discount: "20% OFF", color: "bg-orange-100" },
        { name: "Silk Scarf Pattern", price: "₹800", discount: "New Arrival", color: "bg-purple-100" },
        { name: "Minimalist Watch", price: "₹3,500", discount: "Best Seller", color: "bg-blue-100" },
        { name: "Cotton Linen Shirt", price: "₹1,500", discount: "15% OFF", color: "bg-green-100" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-8">
            {/* Header Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.displayName?.split(' ')[0] || 'fashionista'}!</h1>
                    <span className="text-2xl">✨</span>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Find your next outfit..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-purple-100 outline-none text-sm placeholder-gray-400 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2.5 bg-gray-50 rounded-full text-purple-600 shadow-sm relative hover:bg-gray-100 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-2 ml-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
                                {user?.displayName?.[0]?.toUpperCase() || 'U'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center shadow-sm`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Spending Overview Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold flex items-center gap-2"><CreditCard size={18} className="text-purple-500" /> Spending Overview</h3>
                        <select className="text-xs bg-gray-50 border-none rounded-lg py-1 px-3 text-gray-500 font-medium cursor-pointer outline-none">
                            <option>This Year</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    {/* Visual Curve Chart Simulation */}
                    <div className="h-64 relative flex items-end w-full overflow-hidden">
                        <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 py-2 pointer-events-none z-10 w-full pr-4">
                            <div className="flex w-full border-b border-dashed border-gray-100 h-1 flex-1"></div>
                            <div className="flex w-full border-b border-dashed border-gray-100 h-1 flex-1"></div>
                            <div className="flex w-full border-b border-dashed border-gray-100 h-1 flex-1"></div>
                            <div className="flex w-full border-b border-dashed border-gray-100 h-1 flex-1"></div>
                        </div>

                        {/* SVG Drawing for smooth curves */}
                        <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="spendingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Area Fill */}
                            <path d="M0,200 C150,200 200,100 300,120 S500,180 600,140 S700,80 800,100 V300 H0 Z" fill="url(#spendingGradient)" />

                            {/* Line */}
                            <path d="M0,200 C150,200 200,100 300,120 S500,180 600,140 S700,80 800,100" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />

                            {/* Data Points */}
                            <circle cx="300" cy="120" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" />
                            <circle cx="600" cy="140" r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="flex justify-between px-2 text-xs text-gray-400 mt-2 font-medium">
                        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                    </div>
                </motion.div>

                {/* Recommendations List */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold flex items-center gap-2"><Heart size={18} className="text-red-500" /> For You</h3>
                        <a href="#" className="text-xs text-purple-600 font-bold hover:underline">View All</a>
                    </div>
                    <div className="space-y-4">
                        {recommendations.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-xl`}>
                                    👕
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-purple-700 transition-colors">{item.name}</h4>
                                    <p className="text-xs font-semibold text-gray-900 mt-0.5">{item.price} <span className="text-green-600 bg-green-100 px-1.5 py-0.5 rounded text-[10px] ml-1">{item.discount}</span></p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm">
                                    <Heart size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Orders Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mx-auto"
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold flex items-center gap-2"><Clock size={18} className="text-blue-500" /> Recent Orders</h3>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                                <th className="pb-3 pl-2 font-medium">Product</th>
                                <th className="pb-3 font-medium">Order ID</th>
                                <th className="pb-3 font-medium">Date</th>
                                <th className="pb-3 font-medium">Amount</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {recentOrders.map((order, i) => (
                                <tr key={i} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 pl-2">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={order.img}
                                                onError={handleImageError}
                                                alt=""
                                                className="w-10 h-10 rounded-lg object-cover shadow-sm"
                                            />
                                            <span className="font-semibold text-gray-800">{order.product}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-gray-500 font-mono">{order.id}</td>
                                    <td className="py-4 text-gray-500">{order.date}</td>
                                    <td className="py-4 font-bold text-gray-900">{order.price}</td>
                                    <td className="py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit
                                            ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                                                order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                                    'bg-blue-100 text-blue-700'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${order.status === 'Delivered' ? 'bg-emerald-500' :
                                                order.status === 'Cancelled' ? 'bg-red-500' :
                                                    'bg-blue-500'
                                                }`}></span>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <button className="text-purple-600 hover:text-purple-800 text-xs font-bold border border-purple-200 hover:border-purple-300 px-3 py-1.5 rounded-lg transition-all">Download</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default BuyerDashboard;
