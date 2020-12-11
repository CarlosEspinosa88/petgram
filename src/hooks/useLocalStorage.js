import { useState } from 'react'

export function useLocalStorage (key, intialValue) {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      return item != null ? JSON.parse(item) : intialValue
    } catch (e) {
      return intialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [storeValue, setLocalStorage]
}
