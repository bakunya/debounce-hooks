import useDebounce from "debounce-hooks"
import { useCallback, useState } from "react"

const Api = () => {
    const [api, setApi] = useState('Miku-chan')
    const [value, setValue] = useState('0')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useDebounce({
        timeout: 1000,
        debounceFunction: useCallback(async () => {
            setLoading(true)
            setError('')
            try {
                if(!value || isNaN(value)) throw new Error('value must be number')
                let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
                if(data.status !== 200) throw new Error('Error when fetch request')
                data = await data.json()
                setApi(data?.title ?? 'bakunya')
            } 
            catch(er) { setError(er.message) }
            finally { setLoading(false) }
        }, [ setApi, setLoading, setError, value ])
    })

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [setValue])
    
    return (
        <div className="min-h-[200vh]">
            <input type="text" onChange={handleChange} value={value} />
            {
                loading && <p>Loading...</p>
            }
            {
                !loading && !!error && <p>Ups something wrong, message: {error}</p>
            }
            {
                !loading && !error && <p>{api}</p>
            }
        </div>
    )
}
  
export default Api