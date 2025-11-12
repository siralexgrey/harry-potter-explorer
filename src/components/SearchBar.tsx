import React from 'react'
import { HiSearch } from 'react-icons/hi'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Search..." }) => {
    return (
        <div className="mb-6 relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={20} />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 relative"
            />
        </div>
    )
}

export default SearchBar
