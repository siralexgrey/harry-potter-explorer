import React from "react"

interface FetchState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

const useFetchData = <T>(fetcher: () => Promise<T>): FetchState<T> => {
    const [data, setData] = React.useState<T | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        setLoading(true)
        setError(null)
        setData(null)

        fetcher()
            .then(setData)
            .catch(err => setError(err.message || 'Error fetching data'))
            .finally(() => setLoading(false))
    }, [fetcher])

    return { data, loading, error }
}

export default useFetchData