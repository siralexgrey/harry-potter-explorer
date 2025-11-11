import React                from 'react'
import { getSpells }        from '../api/hpApi'
import Loader               from '../components/Loader'
import PageTitle            from '../components/PageTitle'
import SpellListItem        from '../components/SpellListItem'
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
            <PageTitle>🪄 Spells</PageTitle>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                />
            </div>

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