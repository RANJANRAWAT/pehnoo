import { motion } from 'framer-motion';
import { Search, Bell, Mail, ChevronDown, Users, Package, ShoppingBag, TrendingUp, MoreHorizontal } from 'lucide-react';

const SellerDashboard = () => {
    // Fallback Image Handler
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300";
    };
    // Mock Data based on reference
    const stats = [
        { label: "Total Customers", value: "2000+", icon: <Users size={20} className="text-purple-600" />, bg: "bg-purple-100" },
        { label: "Total Products", value: "140+", icon: <Package size={20} className="text-yellow-600" />, bg: "bg-yellow-100" },
        { label: "Total Orders", value: "1600+", icon: <ShoppingBag size={20} className="text-red-500" />, bg: "bg-red-100" },
        { label: "Total Sales", value: "2000+", icon: <TrendingUp size={20} className="text-emerald-600" />, bg: "bg-emerald-100" },
    ];

    // Reliable Image URLs
    const productImages = [
        "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=50",
        "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?auto=format&fit=crop&q=80&w=50",
        "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=50",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=50"
    ];

    const orders = [
        { id: "#202394", product: "Jeans", img: productImages[0], customer: "Ripon Ahmed", date: "1 Jan 24", price: "₹1200", status: "Completed" },
        { id: "#202395", product: "Jacket", img: productImages[1], customer: "Darlene Robertson", date: "2 Jan 24", price: "₹1800", status: "Pending" },
        { id: "#202396", product: "Sweater", img: productImages[2], customer: "Leslie Alexander", date: "3 Jan 24", price: "₹500", status: "Completed" },
        { id: "#202397", product: "T-Shirt", img: productImages[3], customer: "Ralph Edwards", date: "4 Jan 24", price: "₹1800", status: "Completed" },
    ];

    const topItems = [
        { name: "Jeans", percentage: 75, color: "bg-purple-500" },
        { name: "Jacket", percentage: 90, color: "bg-yellow-500" },
        { name: "Sweater", percentage: 60, color: "bg-red-500" },
        { name: "T-Shirt", percentage: 60, color: "bg-emerald-500" },
        { name: "Cap", percentage: 50, color: "bg-purple-400" },
    ];

    return (
        <div className=" bg-gray-50 min-h-screen font-sans text-gray-900">
            {/* Header Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">Hello, Robert Fox</h1>
                    <span className="text-2xl">👋</span>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="relative flex-1 md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search your products"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-purple-100 outline-none text-sm placeholder-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2.5 bg-gray-50 rounded-full text-purple-600 shadow-sm relative hover:bg-gray-100 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button className="p-2.5 bg-gray-50 rounded-full text-purple-600 shadow-sm hover:bg-gray-100 transition-colors">
                            <Mail size={20} />
                        </button>
                        <div className="flex items-center gap-2 ml-2">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                                onError={handleImageError}
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="hidden md:block">
                                <p className="text-sm font-bold text-gray-900">Robert Fox</p>
                            </div>
                            <ChevronDown size={16} className="text-gray-400" />
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
                        className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4"
                    >
                        <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Sales Trend Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">Sales Trend</h3>
                        <div className="flex gap-4 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Current year
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Last year
                            </div>
                        </div>
                    </div>
                    {/* Visual Curve Chart Simulation */}
                    <div className="h-64 relative flex items-end">
                        <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 py-2 pointer-events-none">
                            <span>60k</span><span>50k</span><span>40k</span><span>30k</span><span>20k</span><span>10k</span><span>0k</span>
                        </div>
                        {/* SVG Drawing for smooth curves */}
                        <svg className="w-full h-full pl-8" viewBox="0 0 800 300" preserveAspectRatio="none">
                            {/* Grid Lines */}
                            {[1, 2, 3, 4, 5, 6].map(i => <line key={i} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#f3f4f6" strokeWidth="1" />)}

                            {/* Purple Line (Current Year) */}
                            <path d="M0,250 C100,250 150,150 200,150 S300,200 400,150 S500,100 600,120 S700,110 800,100" fill="none" stroke="#a855f7" strokeWidth="3" />
                            {/* Tag for Purple Line */}
                            <g transform="translate(380, 130)">
                                <rect x="0" y="0" width="40" height="20" rx="4" fill="#a855f7" />
                                <text x="20" y="14" textAnchor="middle" fill="white" fontSize="10">40k</text>
                            </g>

                            {/* Red Line (Last Year) */}
                            <path d="M0,280 C80,270 150,230 200,240 S300,270 400,180 S500,180 600,230 S700,260 800,210" fill="none" stroke="#ef4444" strokeWidth="3" />
                        </svg>
                    </div>
                    <div className="flex justify-between pl-8 text-xs text-gray-400 mt-2">
                        <span>January</span><span>March</span><span>May</span><span>July</span><span>September</span><span>December</span>
                    </div>
                </motion.div>

                {/* Product Views Bar Chart */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">Product Views</h3>
                        <div className="text-xs text-gray-400">
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> This Week</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Last Week</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 flex-1">
                                <div className="flex gap-1 items-end h-48 w-full justify-center">
                                    <div className="w-2 bg-red-500 rounded-t-sm" style={{ height: `${30 + Math.random() * 40}%` }}></div>
                                    <div className="w-2 bg-purple-500 rounded-t-sm" style={{ height: `${50 + Math.random() * 50}%` }}></div>
                                </div>
                                <span className="text-[10px] text-gray-400">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* All Orders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">All Orders</h3>
                        <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-gray-400 text-xs">
                                    <th className="pb-3 font-medium">Product</th>
                                    <th className="pb-3 font-medium">Orders ID</th>
                                    <th className="pb-3 font-medium">Customer Name</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Price</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {orders.map((order, i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-none">
                                        <td className="py-3 pr-2">
                                            <img
                                                src={order.img}
                                                onError={handleImageError}
                                                alt=""
                                                className="w-8 h-8 rounded-lg object-cover"
                                            />
                                        </td>
                                        <td className="py-3 text-gray-500">{order.id}</td>
                                        <td className="py-3 font-medium">{order.customer}</td>
                                        <td className="py-3 text-gray-500">{order.date}</td>
                                        <td className="py-3 font-medium">{order.price}</td>
                                        <td className="py-3">
                                            <span className={`px-2 py-1 rounded-md text-xs font-medium 
                                                ${order.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Top Sold Items */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold">Top Sold Items</h3>
                    </div>
                    <div className="space-y-6">
                        {topItems.map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs font-medium mb-1">
                                    <span>{item.name}</span>
                                    <span>{item.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.percentage}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={`h-full rounded-full ${item.color}`}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SellerDashboard;
