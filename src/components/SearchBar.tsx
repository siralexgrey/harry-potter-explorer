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
                className="input-icon relative"
            />
        </div>
    )
}

export default SearchBar
