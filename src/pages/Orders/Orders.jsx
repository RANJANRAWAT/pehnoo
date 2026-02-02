import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { Search, Filter, Box, Truck, Check, Clock, ChevronDown, Download, MapPin, Package } from 'lucide-react';

const Orders = () => {
    const { user } = useAuth();
    const isSeller = user?.role === 'seller';

    // Fallback Image Handler
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300";
    };

    const orderTabs = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
    const [activeTab, setActiveTab] = useState("All");

    // Reliable Image URLs
    const productImages = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=200", // Fashion Model
        "https://images.unsplash.com/photo-1529139574466-a302d2752424?auto=format&fit=crop&q=80&w=200", // Portrait
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200", // T-shirt
        "https://images.unsplash.com/photo-1550614000-4b9519e090f2?auto=format&fit=crop&q=80&w=200", // Pink
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=200", // Scarf
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200", // Red Shoe
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=200", // Sneaker
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=200", // Green Shoe
        "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?auto=format&fit=crop&q=80&w=200", // Leather
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=200"  // Denim
    ];

    // Mock Data for Seller (Incoming Orders) - Generated 50 items
    const sellerOrders = Array.from({ length: 50 }, (_, i) => ({
        id: `#ORD-${9000 + i}`,
        customer: ["Rajesh Kumar", "Priya Singh", "Amit Patel", "Soha Ali", "Vikram Malhotra", "Anjali Sharma", "Rohan Gupta", "Meera Reddy"][i % 8],
        date: i === 0 ? "Today, 10:30 AM" : i === 1 ? "Yesterday, 4:15 PM" : `${i + 1} Feb 24`,
        amount: `₹${(Math.random() * 5000 + 500).toFixed(0)}`,
        items: Math.floor(Math.random() * 5 + 1),
        status: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"][i % 5],
        payment: Math.random() > 0.3 ? "Paid" : "COD"
    }));

    // Mock Data for Buyer (My Orders) - Generated 50 items
    const buyerOrders = Array.from({ length: 50 }, (_, i) => ({
        id: `#ORD-${7000 + i}`,
        date: `Ordered on ${Math.floor(Math.random() * 28) + 1} Jan 24`,
        total: `₹${(Math.random() * 8000 + 800).toFixed(0)}`,
        status: ["In Transit", "Delivered", "Delivered", "Delivered", "Cancelled"][i % 5],
        items: [
            {
                name: ["Vintage Denim Jacket", "Urban Cargo Pants", "Leather Boots", "Black Scarf", "Cotton Hoodie", "Sneakers", "Watch"][i % 7],
                img: productImages[i % productImages.length],
                price: `₹${(Math.random() * 3000 + 500).toFixed(0)}`
            }
        ],
        updates: ["Out for delivery", "Delivered to neighbor", "In transit to hub", "Delivered", "Shipped"][i % 5]
    }));

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-orange-100 text-orange-600';
            case 'Processing': return 'bg-blue-100 text-blue-600';
            case 'Shipped': return 'bg-purple-100 text-purple-600';
            case 'In Transit': return 'bg-purple-100 text-purple-600';
            case 'Delivered': return 'bg-emerald-100 text-emerald-600';
            case 'Cancelled': return 'bg-red-100 text-red-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-10">
            {/* Header */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{isSeller ? "Order Management" : "My Orders"}</h1>
                        <p className="text-gray-500 text-sm">{isSeller ? "Process and track your incoming orders." : "Track your shipments and view order history."}</p>
                    </div>
                    <div className="relative flex-1 md:w-64 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="text" placeholder={isSeller ? "Search by Order ID or Name" : "Search your orders"} className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-purple-100 outline-none text-sm" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto gap-4 scrollbar-hide border-b border-gray-100 pb-1">
                    {orderTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap pb-3 text-sm font-medium transition-colors relative
                                ${activeTab === tab ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            {isSeller ? (
                // Seller View: Order List Table
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50">
                                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                                    <th className="p-4 font-medium">Order ID</th>
                                    <th className="p-4 font-medium">Customer</th>
                                    <th className="p-4 font-medium">Items/Amount</th>
                                    <th className="p-4 font-medium">Payment</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {sellerOrders.map((order) => (
                                    <tr key={order.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4 font-mono font-bold text-gray-700">{order.id} <br /><span className="text-[10px] text-gray-400 font-normal font-sans">{order.date}</span></td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">{order.customer[0]}</div>
                                                <span className="font-medium text-gray-800">{order.customer}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600">{order.items} Items <br /> <span className="font-bold text-gray-900">{order.amount}</span></td>
                                        <td className="p-4"><span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">{order.payment}</span></td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <button className="float-right text-sm text-purple-600 font-medium hover:underline">Manage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            ) : (
                // Buyer View: Order Cards
                <div className="space-y-4">
                    {buyerOrders.map((order, i) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            {/* Order Header */}
                            <div className="p-4 border-b border-gray-50 bg-gray-50/30 flex flex-wrap justify-between items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(order.status)} bg-opacity-20`}>
                                        <Box size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm">{order.status}</h3>
                                        <p className="text-xs text-gray-500">{order.updates}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Order ID</p>
                                    <p className="font-mono font-bold text-gray-800">{order.id}</p>
                                </div>
                            </div>

                            {/* Order Body */}
                            <div className="p-4">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 mb-4 last:mb-0">
                                        <img
                                            src={item.img}
                                            onError={handleImageError}
                                            alt=""
                                            className="w-16 h-16 rounded-md object-cover bg-gray-100"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                                            <p className="text-gray-500 text-xs mb-1">Qty: 1</p>
                                            <p className="font-bold text-gray-900 text-sm">{item.price}</p>
                                        </div>
                                        <button className="text-xs font-bold text-indigo-600 border border-indigo-100 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                                            Write Review
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Order Footer */}
                            <div className="p-4 bg-gray-50/50 flex justify-between items-center border-t border-gray-100">
                                <div className="text-xs text-gray-500">
                                    {order.date}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-gray-900 text-sm">Total: {order.total}</span>
                                    <div className="h-4 w-px bg-gray-300"></div>
                                    <button className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1">
                                        <Download size={14} /> Invoice
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
