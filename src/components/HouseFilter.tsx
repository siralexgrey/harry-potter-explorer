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
                className={selectedHouse === null ? 'btn-primary' : 'btn-glass'}
            >
                All Houses
            </button>
            {HOUSES.map(house => (
                <button
                    key={house}
                    onClick={() => onHouseChange(house)}
                    className={`btn ${
                        selectedHouse === house
                            ? getHouseColor(house, 'background')
                            : 'btn-glass'
                    }`}
                >
                    {house}
                </button>
            ))}
            <button
                onClick={() => onHouseChange('N/A')}
                className={
                    selectedHouse === 'N/A'
                        ? 'btn bg-gray-600/80 hover:bg-gray-700/80 border-gray-500 text-white'
                        : 'btn-glass'
                }
            >
                N/A
            </button>
        </div>
    )
}

export default HouseFilter
