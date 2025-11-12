import React                from 'react'
import { getSpells }        from '../api/hpApi'
import Loader               from '../components/Loader'
import SpellListItem        from '../components/SpellListItem'
import SearchBar            from '../components/SearchBar'
import useFetchData         from '../hooks/useFetchData'
import type { Spell }       from '../types/spell'


const Spells: React.FC = () => {
    const { data: spells, loading, error } = useFetchData<Spell[]>(getSpells)
    const [searchQuery, setSearchQuery] = React.useState('')

    const filteredSpells = React.useMemo(() => {
        if (!spells) return []
        if (!searchQuery) return spells

        return spells.filter(spell =>
            spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (spell.description && spell.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    }, [spells, searchQuery])

    return (
        <div>
            <h1 className="page-title">🪄 Spells</h1>

            <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by name or description..."
            />

            {loading && <Loader />}

            {error && <div className="text-center mt-6 text-red-500">Error: {error}</div>}

            {!loading && !error && filteredSpells.length === 0 && (
                <div className="text-center mt-6">No spells found.</div>
            )}

            {!loading && !error && filteredSpells.length > 0 && (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                    {filteredSpells.map((spell, index) => (
                        <SpellListItem key={spell.id || index} spell={spell} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Spells