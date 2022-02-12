import useDebounce from "@bakunya/debounce-hooks"
import { useCallback, useState } from "react"

const App = () => {
    const [value, setValue] = useState('')

    useDebounce({
        timeout: 1000,
        debounceFunction: useCallback(async () => {
            alert(value)
        }, [ value ])
    })

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [setValue])
    
    return (
        <div className="min-h-[200vh]">
            <input type="text" onChange={handleChange} value={value} />
        </div>
    )
}
  
export default App
