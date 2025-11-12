import React                    from "react"
import {
    NavLink,
    Link
}                               from "react-router-dom"
import { HiX }                  from "react-icons/hi"
import hogwartsLogo             from '../assets/images/hogwarts-logo.png'

interface SidebarProps {
    isOpen: boolean
    onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    return (
        <>
            <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'} ${isOpen ? 'sm:min-w-64' : 'sm:w-0'} fixed sm:sticky left-0 top-0 h-screen w-64 bg-black/30 backdrop-blur-md text-white flex flex-col border-r border-gray-700 transition-all duration-300 z-40 overflow-hidden`}>
                <div className={"p-6 border-b border-gray-700 whitespace-nowrap flex items-center justify-between"}>
                    <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                        <img src={hogwartsLogo} alt="HP Explorer" className="h-10 w-10 object-contain" />
                        <span className="text-xl font-bold">HP Explorer</span>
                    </Link>
                    <button
                        onClick={onToggle}
                        className="p-2 hover:bg-black/40 backdrop-blur-sm rounded-md transition-colors"
                        aria-label="Close sidebar"
                    >
                        <HiX size={24} />
                    </button>
                </div>
                <nav className={"flex-1 p-4"}>
                    <NavLink
                        to="/characters"
                        className={({ isActive }) =>
                            `flex items-center gap-2 p-2 my-2 rounded-md hover:bg-black/40 backdrop-blur-sm transition-colors whitespace-nowrap ${
                            isActive ? "bg-black/50 backdrop-blur-sm font-semibold text-yellow-400" : "text-gray-300"
                            }`
                        }
                    >
                        🧍‍♂️ <span>Characters</span>
                    </NavLink>

                    <NavLink
                        to="/spells"
                        className={({ isActive }) =>
                            `flex items-center gap-2 p-2 my-2 rounded-md hover:bg-black/40 backdrop-blur-sm transition-colors whitespace-nowrap ${
                            isActive ? "bg-black/50 backdrop-blur-sm font-semibold text-yellow-400" : "text-gray-300"
                            }`
                        }
                    >
                        🪄 <span>Spells</span>
                    </NavLink>
                </nav>
            </aside>
            {isOpen && (
                <div
                    onClick={onToggle}
                    className="fixed inset-0 bg-black/50 z-30 sm:hidden"
                />
            )}
        </>
    )
}

export default Sidebar