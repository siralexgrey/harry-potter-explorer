import React from 'react'
import { useSidebar } from '../contexts/SidebarContext'

interface PageTitleProps {
    children: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
    const { isSidebarOpen } = useSidebar()

    return (
        <h1 className={`block text-3xl font-bold mb-6 text-gray-100 ${!isSidebarOpen ? 'ml-14' : ''}`}>
            {children}
        </h1>
    )
}

export default PageTitle
