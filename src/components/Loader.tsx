import React from 'react'

const Loader: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <div
                className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin"
            ></div>
            <p className="text-2xl font-bold mt-4">LOADING</p>
        </div>
    )
}

export default Loader