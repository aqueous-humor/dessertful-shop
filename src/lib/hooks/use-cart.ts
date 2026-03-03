import { useState, useEffect } from 'react'

/**
 * A generic hook to handle hydration for any Zustand store.
 * T: The state shape
 * U: The return type of the selector
 */
export const useStore = <T, U>(
  store: (callback: (state: T) => U) => U,
  callback: (state: T) => U
): U | null => {
  const result = store(callback)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? result : null
}
