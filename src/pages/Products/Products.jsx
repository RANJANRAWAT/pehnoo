import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { useCart } from '../../context/CartContext/CartContext';
import { Search, Filter, Plus, MoreHorizontal, Edit, Trash2, ShoppingBag, Heart, Star, Tag, Check } from 'lucide-react';

const Products = () => {
    const { user } = useAuth();
    const { addToCart, cartItems } = useCart();
    const isSeller = user?.role === 'seller';
    const [addedItems, setAddedItems] = useState({}); // Track added items for visual feedback

    // Fallback Image Handler
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300"; // Reliable fallback
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedItems(prev => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddedItems(prev => ({ ...prev, [product.id]: false }));
        }, 2000);
    };

    // Reliable Image URLs
    const productImages = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1529139574466-a302d2752424?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1550614000-4b9519e090f2?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=300"
    ];

    // Mock Data for Seller (Inventory) - Generated 50 items
    const sellerProducts = Array.from({ length: 50 }, (_, i) => ({
        id: `PROD-${1000 + i}`,
        name: ["Premium Cotton T-Shirt", "Slim Fit Denim Jeans", "Floral Summer Dress", "Leather Jacket", "Running Sneakers", "Classic Chinos", "Oxford Shirt", "Wool Sweater", "Silk Scarf", "Casual Blazer"][i % 10] + ` ${Math.floor(i / 10) + 1}`,
        category: ["Men's Wear", "Women's Wear", "Outerwear", "Footwear", "Accessories"][i % 5],
        price: `₹${(Math.random() * 5000 + 500).toFixed(0)}`,
        stock: Math.floor(Math.random() * 200),
        sales: Math.floor(Math.random() * 500),
        status: Math.random() > 0.8 ? "Out of Stock" : Math.random() > 0.6 ? "Low Stock" : "Active",
        img: productImages[i % productImages.length]
    }));

    // Mock Data for Buyer (Marketplace) - Generated 50 items
    const buyerProducts = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: ["Urban Street Hoodie", "Classic White Sneakers", "Vintage Denim Jacket", "Silk Scarf", "Leather Crossbody", "Summer Floral Dress", "Minimalist Watch", "Aviator Sunglasses", "Bomber Jacket", "Formal Trousers"][i % 10] + ` - Vol ${i}`,
        brand: ["Nike", "Adidas", "Levi's", "H&M", "Zara", "Mango", "Puma", "Reebok", "Gucci", "Prada"][i % 10],
        price: `₹${(Math.random() * 8000 + 800).toFixed(0)}`,
        rating: (Math.random() * 1.5 + 3.5).toFixed(1),
        reviews: Math.floor(Math.random() * 500 + 20),
        img: productImages[(i + 5) % productImages.length], // Offset by 5 for variety
        new: Math.random() > 0.8
    }));

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-10">
            {/* Header */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{isSeller ? "My Inventory" : "Discover Fashion"}</h1>
                    <p className="text-gray-500 text-sm">{isSeller ? "Manage your products and stock levels." : "Explore the latest trends and collections."}</p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-purple-100 outline-none text-sm" />
                    </div>
                    <Link to="/cart" className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-purple-600 transition-colors relative">
                        <ShoppingBag size={20} />
                        {!isSeller && cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                    <button className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100"><Filter size={20} /></button>
                    {isSeller && (
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-purple-200 transition-all">
                            <Plus size={18} /> Add Product
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            {isSeller ? (
                // Seller View: Table
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50">
                                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                                    <th className="p-4 font-medium">Product</th>
                                    <th className="p-4 font-medium">Category</th>
                                    <th className="p-4 font-medium">Price</th>
                                    <th className="p-4 font-medium">Stock</th>
                                    <th className="p-4 font-medium">Sales</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {sellerProducts.map((product) => (
                                    <tr key={product.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.img}
                                                    onError={handleImageError}
                                                    alt=""
                                                    className="w-10 h-10 rounded-lg object-cover bg-gray-100"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{product.name}</p>
                                                    <p className="text-xs text-gray-400">{product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600">{product.category}</td>
                                        <td className="p-4 font-bold text-gray-900">{product.price}</td>
                                        <td className="p-4 text-gray-600">{product.stock}</td>
                                        <td className="p-4 text-gray-600">{product.sales}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold 
                                                ${product.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                                                    product.status === 'Low Stock' ? 'bg-yellow-50 text-yellow-600' :
                                                        'bg-gray-100 text-gray-500'}`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><Edit size={16} /></button>
                                                <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"><Trash2 size={16} /></button>
                                                <button className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-md transition-colors"><MoreHorizontal size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            ) : (
                // Buyer View: Grid
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {buyerProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                        >
                            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                                <img
                                    src={product.img}
                                    onError={handleImageError}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.new && (
                                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide">New</span>
                                )}
                                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                                    <Heart size={16} />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`w-full font-bold py-2 rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm transition-all
                                            ${addedItems[product.id] ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
                                    >
                                        {addedItems[product.id] ? <Check size={16} /> : <ShoppingBag size={16} />}
                                        {addedItems[product.id] ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
                                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                                        <Star size={12} fill="currentColor" /> {product.rating} <span className="text-gray-300 font-normal">({product.reviews})</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                    {/* Simulated crossed out price */}
                                    {product.new && <span className="text-sm text-gray-400 line-through">₹{parseInt(product.price.replace(/\D/g, '')) + 1000}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
