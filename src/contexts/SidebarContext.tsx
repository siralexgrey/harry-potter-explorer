/* eslint-disable react-refresh/only-export-components */
import React from 'react'

interface SidebarContextType {
    isSidebarOpen: boolean
    toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

SidebarContext.displayName = 'SidebarContext'

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

    const toggleSidebar = React.useCallback(() => {
        setIsSidebarOpen(prev => !prev)
    }, [])

    const value = React.useMemo(() => ({
        isSidebarOpen,
        toggleSidebar
    }), [isSidebarOpen, toggleSidebar])

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = React.useContext(SidebarContext)
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}
