export type HouseColorVariant = 'background' | 'text' | 'badge'

export type HouseName = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw'

export const getHouseColor = (
    house: string | undefined,
    variant: HouseColorVariant = 'background'
): string => {
    if (!house) {
        return variant === 'text' ? 'text-gray-200' : 'bg-gray-600'
    }

    const lowerHouse = house.toLowerCase()

    const colorMap: Record<string, Record<HouseColorVariant, string>> = {
        gryffindor: {
            background: 'bg-red-900 hover:bg-red-800 border-red-700',
            text: 'text-red-400',
            badge: 'bg-red-900'
        },
        slytherin: {
            background: 'bg-green-900 hover:bg-green-800 border-green-700',
            text: 'text-green-400',
            badge: 'bg-green-900'
        },
        hufflepuff: {
            background: 'bg-yellow-900 hover:bg-yellow-800 border-yellow-700',
            text: 'text-yellow-400',
            badge: 'bg-yellow-900'
        },
        ravenclaw: {
            background: 'bg-blue-900 hover:bg-blue-800 border-blue-700',
            text: 'text-blue-400',
            badge: 'bg-blue-900'
        }
    }

    for (const [key, colors] of Object.entries(colorMap)) {
        if (lowerHouse.includes(key)) {
            return colors[variant]
        }
    }

    return variant === 'text' ? 'text-gray-200' : 'bg-gray-600'
}

export const HOUSES: HouseName[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
