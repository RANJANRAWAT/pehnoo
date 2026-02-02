import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Twitter, Facebook } from 'lucide-react';

const Login = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState(location.state?.role || 'buyer'); // 'buyer' or 'seller'

    // Update userType if location state changes (e.g. clicking different nav link)
    useEffect(() => {
        if (location.state?.role) {
            setUserType(location.state.role);
        }
    }, [location.state]);

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login delay for effect
        setTimeout(() => {
            login({
                name: formData.username || 'User',
                displayName: formData.username || 'User',
                role: userType
            });
            navigate(userType === 'seller' ? '/seller-dashboard' : '/buyer-dashboard');
        }, 800);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen flex bg-gray-900 overflow-hidden pt-20">
            {/* Left Side - Image (Now Left) */}
            <div className="hidden md:block w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion Model"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-20"></div>

                <div className="absolute bottom-12 left-12 z-30 max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">Define Your Style. <br /> <span className="text-indigo-400">Own Your Look.</span></h1>
                        <p className="text-white/80 text-lg">Join thousands of trendsetters on Pehnoo today.</p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Form (Now Right) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative z-10">
                {/* Animated Background for form side only */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-purple-900/40 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[70%] bg-indigo-900/40 rounded-full blur-[100px]"></div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full max-w-sm"
                >
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? "Welcome Back" : "Join the Movement"}</h2>
                        <p className="text-gray-400 text-sm">
                            {isLogin ? "Enter your details to access your account" : "Create an account to start your fashion journey"}
                        </p>
                    </div>

                    {/* Login/Signup Switcher */}
                    <div className="flex bg-white/5 p-1 rounded-lg mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${isLogin ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${!isLogin ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.form
                            key={isLogin ? "login" : "signup"}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {!isLogin && (
                                <motion.div variants={itemVariants} className="relative">
                                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                                        required
                                    />
                                </motion.div>
                            )}

                            <motion.div variants={itemVariants} className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                                    required={!isLogin}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                                    required
                                />
                            </motion.div>

                            {isLogin && (
                                <div className="flex justify-end">
                                    <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot Password?</a>
                                </div>
                            )}

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                {isLogin ? "Sign In" : "Create Account"}
                                <ArrowRight size={18} />
                            </motion.button>
                        </motion.form>
                    </AnimatePresence>

                    <div className="mt-8">
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-white/10"></div>
                            <span className="flex-shrink-0 mx-3 text-gray-500 text-xs">Or continue with</span>
                            <div className="flex-grow border-t border-white/10"></div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10"><Github size={18} /></button>
                            <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-blue-400 border border-white/10"><Twitter size={18} /></button>
                            <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-blue-600 border border-white/10"><Facebook size={18} /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
