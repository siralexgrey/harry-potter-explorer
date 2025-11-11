import type { Character }       from '../types/character'
import type { Spell }           from '../types/spell'

const BASE_URL = 'https://hp-api.onrender.com/api'

const cache = new Map<string, { data: unknown; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

async function fetchFromAPI<T>(endpoint: string, useCache: boolean = true): Promise<T> {
    const cacheKey = `${BASE_URL}${endpoint}`

    // Check cache
    if (useCache && cache.has(cacheKey)) {
        const cached = cache.get(cacheKey)!
        const isExpired = Date.now() - cached.timestamp > CACHE_DURATION

        if (!isExpired) {
            return cached.data as T
        }

        cache.delete(cacheKey)
    }

    try {
        const response = await fetch(cacheKey)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (useCache) {
            cache.set(cacheKey, { data, timestamp: Date.now() })
        }

        return data as T
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch from ${endpoint}: ${error.message}`)
        }
        throw new Error(`Failed to fetch from ${endpoint}`)
    }
}

export const getCharacters = async (): Promise<Character[]> => {
    return fetchFromAPI<Character[]>('/characters')
}

export const getCharacterById = async (id: string): Promise<Character> => {
    const data = await fetchFromAPI<Character | Character[]>(`/character/${id}`)
    return Array.isArray(data) ? data[0] : data
}

export const getSpells = async (): Promise<Spell[]> => {
    return fetchFromAPI<Spell[]>('/spells')
}

export const clearCache = (): void => {
    cache.clear()
}

export const clearCacheEntry = (endpoint: string): void => {
    const cacheKey = `${BASE_URL}${endpoint}`
    cache.delete(cacheKey)
}
