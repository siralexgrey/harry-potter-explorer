import React                    from 'react'
import type { Character }       from '../types/character'
import { getCharacters }        from '../api/hpApi'
import useFetchData             from '../hooks/useFetchData'
import Loader                   from '../components/Loader'
import CharacterCard            from '../components/CharacterCard'
import SearchBar                from '../components/SearchBar'
import HouseFilter              from '../components/HouseFilter'

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
            <h1 className="page-title">🧍‍♂️ Characters</h1>

            <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by name or house..."
            />

            <HouseFilter
                selectedHouse={selectedHouse}
                onHouseChange={setSelectedHouse}
            />

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