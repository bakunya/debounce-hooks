# Debounce Hooks
React debounce hooks based on state changed.

## [Live Preview / Demo In Here](https://bakunya-debounce-hooks.netlify.app)

## Installation

```bash
npm i @bakunya/debounce-hooks

```

## Basic Usage

### Note
**debounceFunction must be function that wrapped on useCallback. Cause every dependencies changed on useCallback (rerender function), it will be trigger debounce-hooks to running debounceFunction**

```jsx
const [value, setValue] = useState('bakunya')

useDebounce({
    // timeout count.
    timeout: 1000,
    
    // function that wrapped on useCallback hooks
    debounceFunction: useCallback(async () => {
    
        // value will be print after value state not change in 1000ms/1s
        console.log(value)
        
    }, [ value ])
})

const handleChange = useCallback((e) => {
    setValue(e.target.value)
}, [setValue])
```

## Fetch API Examples

```jsx
import useDebounce from "debounce-hooks"
import { useCallback, useState } from "react"

const App = () => {
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
  
export default App
```

## License
This project under MIT License.

## Support Developer
**You can support developer in [Here](https://trakteer.id/bakunya/tip). Thank you.**
