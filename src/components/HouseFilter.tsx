import React from 'react'
import { getHouseColor, HOUSES } from '../utils/houseColors'

interface HouseFilterProps {
    selectedHouse: string | null
    onHouseChange: (house: string | null) => void
}

const HouseFilter: React.FC<HouseFilterProps> = ({ selectedHouse, onHouseChange }) => {
    return (
        <div className="mb-6 flex flex-wrap gap-4">
            <button
                onClick={() => onHouseChange(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${
                    selectedHouse === null
                        ? 'bg-yellow-600 hover:bg-yellow-700 border-yellow-500 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300'
                }`}
            >
                All Houses
            </button>
            {HOUSES.map(house => (
                <button
                    key={house}
                    onClick={() => onHouseChange(house)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors border text-white ${
                        selectedHouse === house
                            ? getHouseColor(house, 'background')
                            : 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300'
                    }`}
                >
                    {house}
                </button>
            ))}
            <button
                onClick={() => onHouseChange('N/A')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${
                    selectedHouse === 'N/A'
                        ? 'bg-gray-600 hover:bg-gray-700 border-gray-500 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300'
                }`}
            >
                N/A
            </button>
        </div>
    )
}

export default HouseFilter
