import { useState, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext/AuthContext';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const { user } = useAuth();

    return (
        <aside className="h-screen w-min transition-all duration-300 ease-in-out">
            <nav className={`h-full inline-flex flex-col bg-white border-r shadow-sm transition-all duration-300 ease-in-out ${expanded ? "w-64" : "w-20"}`}>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className={`flex items-center gap-2 overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                            P
                        </div>
                        <span className="font-bold text-xl text-gray-800">Pehnoo</span>
                    </div>

                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 py-4 space-y-2">
                        {children}
                    </ul>
                </SidebarContext.Provider>

                {/* Theme Toggle */}
                <div className={`border-t p-3 flex justify-center transition-all ${expanded ? "" : "px-0"}`}>
                    <div className={`bg-gray-100 p-1 rounded-full flex items-center cursor-pointer transition-all ${expanded ? "w-full justify-between px-1" : "flex-col gap-2 p-2"}`} onClick={() => setDarkMode(!darkMode)}>
                        <div className={`p-1.5 rounded-full transition-all ${!darkMode ? "bg-white shadow-sm text-indigo-600" : "text-gray-400"}`}>
                            <Sun size={18} />
                        </div>
                        {expanded && <span className="text-xs font-medium text-gray-500">{darkMode ? "Dark" : "Light"}</span>}
                        <div className={`p-1.5 rounded-full transition-all ${darkMode ? "bg-indigo-600 text-white shadow-sm" : "text-gray-400"}`}>
                            <Moon size={18} />
                        </div>
                    </div>
                </div>

                <div className="border-t p-3">
                    <div className={`flex items-center gap-3 transition-all ${expanded ? "justify-start" : "justify-center"}`}>
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold flex-shrink-0">
                            {user?.displayName?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-40 ml-2" : "w-0"}`}>
                            <div className="leading-4 text-sm">
                                <h4 className="font-semibold text-gray-700">{user?.displayName || 'User'}</h4>
                                <span className="text-xs text-gray-600">{user?.email || 'user@example.com'}</span>
                            </div>
                            <MoreVertical size={20} className="text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            onClick={onClick}
            className={`
                relative flex items-center py-3 px-3 my-1
                font-medium rounded-xl cursor-pointer
                transition-all group
                ${active
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "hover:bg-indigo-50 text-gray-600"
                }
        `}>
            {icon}
            <span className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-40 ml-3" : "w-0"}`}>
                {text}
            </span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
            )}

            {!expanded && (
                <div className={`
                    absolute left-full rounded-md px-2 py-1 ml-6
                    bg-indigo-100 text-indigo-800 text-sm
                    invisible opacity-20 -translate-x-3 transition-all
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    z-10 w-max
                `}>
                    {text}
                </div>
            )}
        </li>
    );
}
