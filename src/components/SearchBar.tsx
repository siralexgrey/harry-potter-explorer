import React from 'react'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Search..." }) => {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
        </div>
    )
}

export default SearchBar
