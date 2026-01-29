import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Package, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const navigate = useNavigate();

    // Stats Data
    const stats = [
        { label: "Active Users", value: "50K+", icon: <Users size={24} /> },
        { label: "Products", value: "10K+", icon: <Package size={24} /> },
        { label: "Reviews", value: "4.8/5", icon: <Star size={24} /> },
    ];

    // Categories Data
    const categories = [
        { name: "Men's Fashion", image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop", color: "from-blue-500 to-cyan-500" },
        { name: "Women's Collection", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", color: "from-pink-500 to-rose-500" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop", color: "from-amber-500 to-orange-500" },
        { name: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop", color: "from-emerald-500 to-teal-500" },
    ];

    // Trending Products
    const products = [
        { name: "Urban Street Hoodie", price: "₹1,499", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop" },
        { name: "Classic Denim Jacket", price: "₹2,999", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1974&auto=format&fit=crop" },
        { name: "Summer Floral Dress", price: "₹1,899", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop" },
        { name: "Minimalist Sneakers", price: "₹3,499", image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1976&auto=format&fit=crop" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
                            Wear Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Confidence</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        Pehnoo brings you the latest trends, curated just for you. Experience fashion that speaks your language.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => navigate('/login')}
                            className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full text-lg shadow-lg hover:shadow-white/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            Start Shopping <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all"
                        >
                            Become a Seller
                        </button>
                    </motion.div>
                </div>

                {/* Floating Elements (Decorative) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 hidden md:block"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 blur-sm opacity-60"></div>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-10 hidden md:block"
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-sm opacity-60"></div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-xl">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                                    <p className="text-gray-500 font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Shop by Category</h2>
                        <button className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1">View All <ArrowRight size={16} /></button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                            >
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className={`inline-block px-3 py-1 mb-2 text-xs font-bold text-white rounded-full bg-gradient-to-r ${cat.color}`}>
                                        FEATURED
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Products */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">New Arrivals</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2">Trending Now</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <Heart size={20} />
                                    </button>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="px-6 py-2 bg-white text-gray-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                <p className="text-indigo-600 font-bold">{product.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
