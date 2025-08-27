'use client'

   import { createContext, useContext, useState, useEffect } from 'react'

   const ThemeContext = createContext()

   export function ThemeProvider({ children }) {
     const [isDarkMode, setIsDarkMode] = useState(false)

     useEffect(() => {
       if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         setIsDarkMode(true)
       } else {
         setIsDarkMode(false)
       }
     }, [])

     useEffect(() => {
       if (isDarkMode) {
         document.documentElement.classList.add('dark')
         localStorage.theme = 'dark'
       } else {
         document.documentElement.classList.remove('dark')
         localStorage.theme = ''
       }
     }, [isDarkMode])

     return (
       <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
         {children}
       </ThemeContext.Provider>
     )
   }

   export function useTheme() {
     return useContext(ThemeContext)
   }