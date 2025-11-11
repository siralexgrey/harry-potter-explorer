import React                    from 'react'
import {
    useParams,
    useNavigate
}                               from 'react-router-dom'
import type { Character }       from '../types/character'
import { getCharacterById }     from '../api/hpApi'
import useFetchData             from '../hooks/useFetchData'
import Loader                   from '../components/Loader'
import { useSidebar }           from '../contexts/SidebarContext'
import { getHouseColor }        from '../utils/houseColors'

const CharacterDetail: React.FC = () => {
    const navigate = useNavigate()
    const { isSidebarOpen } = useSidebar()

    const { id } = useParams<{ id: string }>()

    const fetcher = React.useCallback(() => getCharacterById(id!), [id])
    const { data: character, loading, error } = useFetchData<Character>(fetcher)

    return (
        <div className="max-w-full">
            <button
                onClick={() => navigate(-1)}
                className={`mb-4 px-4 py-2 bg-black/40 backdrop-blur-sm text-white rounded hover:bg-black/60 transition-colors border border-gray-700 ${!isSidebarOpen ? 'ml-14' : ''}`}
            >
                ← Back
            </button>

            {loading && <Loader />}

            {error && <div className="text-center mt-6 text-red-500">Error: {error}</div>}

            {!loading && !error && !character && (
                <div className="text-center mt-6">No character data found.</div>
            )}

            {!loading && !error && character && (
                <div className="flex flex-col md:flex-row gap-6">
                    {character.image && (
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-full md:w-96 h-64 md:h-96 object-cover rounded-lg shadow-xl shrink-0"
                            loading="lazy"
                        />
                    )}
                    <div className="p-6 flex flex-col justify-center items-center md:items-start flex-1 bg-black/40 backdrop-blur-sm rounded-lg shadow-xl">
                        <h1 className="text-4xl font-bold mb-6 text-white text-center md:text-left">{character.name}</h1>
                        <div className="space-y-3 w-full">
                            <p className="text-lg text-gray-200 flex items-center gap-2">
                                <strong className="text-yellow-400">House:</strong> 
                                {character.house ? (
                                    <span className={`${getHouseColor(character.house, 'badge')} px-3 py-1 rounded-md text-white font-semibold`}>
                                        {character.house}
                                    </span>
                                ) : 'N/A'}
                            </p>
                            <p className="text-lg text-gray-200"><strong className="text-yellow-400">Date of Birth:</strong> {character.dateOfBirth || 'N/A'}</p>
                            <p className="text-lg text-gray-200"><strong className="text-yellow-400">Actor:</strong> {character.actor || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CharacterDetail