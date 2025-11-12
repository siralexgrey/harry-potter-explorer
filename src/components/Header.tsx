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
                    className="btn-icon"
                    aria-label="Toggle sidebar"
                >
                    <HiMenuAlt3 size={24} />
                </button>
            )}

            <div className="flex items-center gap-4 flex-1">
                {!isHomePage && (
                    <button
                        onClick={() => navigate(-1)}
                        className="btn-glass rounded"
                    >
                        ← Back
                    </button>
                )}

                {title && (
                    <h1 className="page-title mb-0">
                        {title}
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Header
