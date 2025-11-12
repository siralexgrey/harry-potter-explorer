import React, { useState }  from 'react'
import { Outlet }           from 'react-router-dom'
import Sidebar              from './Sidebar'
import Header               from './Header'
import mainBg               from '../assets/images/main-bg.jpg'

const Layout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    return (
        <div className="flex min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
                style={{ backgroundImage: `url(${mainBg})` }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
            <main className="flex-1 p-6 text-gray-100 w-full relative z-10">
                <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout