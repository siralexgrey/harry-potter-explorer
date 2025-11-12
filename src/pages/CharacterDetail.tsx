import React                    from 'react'
import { useParams }            from 'react-router-dom'
import type { Character }       from '../types/character'
import { getCharacterById }     from '../api/hpApi'
import useFetchData             from '../hooks/useFetchData'
import Loader                   from '../components/Loader'
import { getHouseColor }        from '../utils/houseColors'

const CharacterDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const fetcher = React.useCallback(() => getCharacterById(id!), [id])
    const { data: character, loading, error } = useFetchData<Character>(fetcher)

    return (
        <div className="max-w-full">

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
                            className="w-full md:w-96 h-64 md:h-96 object-cover card shrink-0"
                            loading="lazy"
                        />
                    )}
                    <div className="p-6 flex flex-col justify-center items-center md:items-start flex-1 card-glass">
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