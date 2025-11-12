import React                    from 'react'
import type { Character }       from '../types/character'
import { getCharacters }        from '../api/hpApi'
import useFetchData             from '../hooks/useFetchData'
import Loader                   from '../components/Loader'
import CharacterCard            from '../components/CharacterCard'
import {
    getHouseColor,
    HOUSES
}                               from '../utils/houseColors'

const Characters: React.FC = () => {
    const { data: characters, loading, error } = useFetchData<Character[]>(getCharacters)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [selectedHouse, setSelectedHouse] = React.useState<string | null>(null)

    const filteredCharacters = React.useMemo(() => {
        if (!characters) return []

        let filtered = characters

        if (selectedHouse === 'N/A') {
            filtered = filtered.filter(character => !character.house)
        } else if (selectedHouse) {
            filtered = filtered.filter(character =>
                character.house && character.house.toLowerCase() === selectedHouse.toLowerCase()
            )
        }

        if (searchQuery) {
            filtered = filtered.filter(character =>
                character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (character.house && character.house.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        }

        return filtered
    }, [characters, searchQuery, selectedHouse])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-100">🧍‍♂️ Characters</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name or house..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                />
            </div>

            <div className="mb-6 flex flex-wrap gap-4">
                <button
                    onClick={() => setSelectedHouse(null)}
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
                        onClick={() => setSelectedHouse(house)}
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
                    onClick={() => setSelectedHouse('N/A')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${
                        selectedHouse === 'N/A'
                            ? 'bg-gray-600 hover:bg-gray-700 border-gray-500 text-white'
                            : 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300'
                    }`}
                >
                    N/A
                </button>
            </div>

            {loading && <Loader />}

            {error && <div className="text-center mt-6 text-red-500">Error: {error}</div>}

            {!loading && !error && filteredCharacters.length === 0 && (
                <div className="text-center mt-6">No characters found.</div>
            )}

            {!loading && !error && filteredCharacters.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredCharacters.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Characters