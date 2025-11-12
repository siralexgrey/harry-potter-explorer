import React                from 'react'
import {
    useNavigate,
    useLocation
}                           from 'react-router-dom'
import { HiMenuAlt3 }       from 'react-icons/hi'

interface HeaderProps {
    onToggleSidebar: () => void
    isSidebarOpen: boolean
    title?: string
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen, title }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <div className="flex items-center gap-4 mb-6">
            {!isSidebarOpen && (
                <button
                    onClick={onToggleSidebar}
                    className="p-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-md transition-colors border border-gray-700"
                    aria-label="Toggle sidebar"
                >
                    <HiMenuAlt3 size={24} />
                </button>
            )}

            <div className="flex items-center gap-4 flex-1">
                {!isHomePage && (
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white rounded hover:bg-black/60 transition-colors border border-gray-700"
                    >
                        ← Back
                    </button>
                )}

                {title && (
                    <h1 className="text-3xl font-bold text-gray-100">
                        {title}
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Header
