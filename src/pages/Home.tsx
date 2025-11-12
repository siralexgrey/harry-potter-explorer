import React            from 'react'
import { Link }         from 'react-router-dom'
import hogwartsLogo     from '../assets/images/hogwarts-logo.png'

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-8 w-full max-w-xl">
                <img
                    src={hogwartsLogo}
                    alt="Harry Potter Explorer"
                    className="w-full h-auto card"
                />
            </div>

            <h1 className="text-4xl font-bold text-white mb-8 text-center">Welcome to HP Explorer</h1>

            <div className="flex flex-col md:flex-row gap-6 max-w-2xl w-full">
                <Link
                    to="/characters"
                    className="flex-1 p-8 card-glass hover:bg-yellow-900/30 transition-all hover:scale-105"
                >
                    <div className="text-6xl mb-4 text-center">🧍‍♂️</div>
                    <h2 className="heading text-center">Characters</h2>
                    <p className="text-gray-300 text-center mt-2">Explore all Harry Potter characters</p>
                </Link>

                <Link
                    to="/spells"
                    className="flex-1 p-8 card-glass hover:bg-yellow-900/30 transition-all hover:scale-105"
                >
                    <div className="text-6xl mb-4 text-center">🪄</div>
                    <h2 className="heading text-center">Spells</h2>
                    <p className="text-gray-300 text-center mt-2">Discover magical spells</p>
                </Link>
            </div>
        </div>
    )
}

export default Home
