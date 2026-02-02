import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard, X, RefreshCw, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    // Fallback Image Handler
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300";
    };

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white p-6">
                <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <ShoppingBag size={56} className="text-gray-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 font-outfit">Your cart is empty</h2>
                <p className="text-gray-500 mb-10 max-w-md text-center text-lg">Looks like you haven't added anything to your cart yet. Explore our products to find something you love.</p>
                <Link to="/products" className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3">
                    Start Shopping <ArrowRight size={20} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 font-outfit tracking-tight">Shopping Cart</h1>
                        <p className="text-gray-500 mt-2 text-lg">You have {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items in your cart</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* Left Section: Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                    {/* Image */}
                                    <div className="w-full sm:w-32 h-32 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0 cursor-pointer shadow-inner">
                                        <img
                                            src={item.img}
                                            onError={handleImageError}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 w-full flex flex-col justify-between min-h-[128px]">
                                        <div className="flex justify-between items-start w-full">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 uppercase tracking-wide">{item.brand || 'Brand'}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 font-outfit leading-tight mb-1">{item.name}</h3>
                                                <p className="text-sm text-gray-400">Set • {item.size || 'M'} • {item.color || 'Standard'}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all -mr-2 -mt-2"
                                                title="Remove item"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end mt-4 sm:mt-0">
                                            <p className="text-2xl font-bold text-gray-900">
                                                ₹{(parseInt((typeof item.price === 'string' ? item.price : `₹${item.price}`).replace(/\D/g, '')) * item.quantity).toFixed(0)}
                                            </p>

                                            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-200 shadow-sm">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-black hover:shadow-sm transition-all disabled:opacity-50 disabled:hover:shadow-none"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 shadow-sm transition-all"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="flex justify-start mt-8">
                            <Link to="/products" className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-white hover:shadow-sm">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Right Section: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-outfit">Order Summary</h3>

                            {/* Coupon Input */}
                            <div className="mb-8 relative">
                                <input
                                    type="text"
                                    placeholder="Enter discount code"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                                />
                                <button className="absolute right-2 top-2 bottom-2 px-5 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors shadow-sm">
                                    Apply
                                </button>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-gray-500 text-sm">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900 text-base">₹{getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 text-sm">
                                    <span>Discount (-10%)</span>
                                    <span className="font-bold text-green-600 text-base">-₹{(getCartTotal() * 0.10).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500 text-sm">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-gray-900 text-base">₹50.00</span>
                                </div>

                                <div className="h-px bg-gray-100 my-6" />

                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-2xl font-bold text-gray-900 font-outfit">₹{(getCartTotal() * 0.90 + 50).toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-right">Including VAT</p>
                            </div>

                            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3">
                                Checkout <ArrowRight size={20} />
                            </button>

                            <div className="mt-8 flex items-center justify-center gap-4 text-gray-300">
                                <CreditCard size={24} />
                                {/* Add more payment icons here if available */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
