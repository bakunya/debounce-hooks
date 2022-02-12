import { useRef, useEffect } from "react"


/**
 * @param { debounceFunction } Object function that wrapped on useCallback hooks
 * @param { timeout } Number timeout count
 * @returns void
 */
const useDebounce =  ({ debounceFunction, timeout: timeoutCount }) => {
    if(typeof debounceFunction !== 'function') throw new Error('debounceFunction must be Function')
    if(isNaN(timeoutCount)) throw new Error('timeout must be Number')
    
    const timeout = useRef(null)
    const firstRun = useRef(true)


    useEffect(() => {

        if(firstRun.current) {
            firstRun.current = false
        } else {
            if(timeout.current) clearTimeout(timeout.current)

            timeout.current = setTimeout(() => {
                debounceFunction()
            }, timeoutCount);
        }


        return () => {
            if(timeout.current) clearTimeout(timeout.current)
        }

    }, [timeout, firstRun, debounceFunction, timeoutCount])
}

export default useDebounce