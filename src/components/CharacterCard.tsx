import { Link }                 from "react-router-dom"
import type { Character }       from "../types/character"
import placeholderImage         from '../assets/images/HP-logo.png'
import { getHouseColor }        from '../utils/houseColors'

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
    return (
        <Link
            key={character.id}
            to={`/characters/${character.id}`}
        >
            <div className="relative rounded-lg overflow-hidden shadow hover:shadow-xl transition group bg-gray-900">
                <img
                    src={character.image || placeholderImage}
                    alt={character.name}
                    className={`w-full h-100 transition-transform duration-300 group-hover:scale-110 ${
                        character.image
                            ? 'object-cover'
                            : 'object-contain bg-black'
                    }`}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 p-4 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:h-40 group-hover:justify-center flex flex-col">
                    <h2 className="text-lg font-semibold text-white transition-all duration-300 group-hover:text-2xl">{character.name}</h2>
                    <p className={`text-sm font-semibold transition-all duration-300 group-hover:text-lg ${getHouseColor(character.house, 'text')}`}>{character.house || '\u00A0'}</p>
                </div>
            </div>
        </Link>
    )
}

export default CharacterCard