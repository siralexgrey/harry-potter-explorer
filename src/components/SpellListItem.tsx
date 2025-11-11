import React            from 'react'
import type { Spell }   from '../types/spell'

interface SpellListItemProps {
    spell: Spell
}

const SpellListItem: React.FC<SpellListItemProps> = ({ spell }) => {
    return (
        <div className="border border-gray-700 p-4 rounded-lg shadow bg-gray-800/30 hover:bg-yellow-900/20 transition-colors">
            <h2 className="text-lg font-semibold mb-2 text-white">{spell.name}</h2>
            <p className="text-sm text-gray-400">{spell.description || "No description available"}</p>
        </div>
    )
}

export default SpellListItem
