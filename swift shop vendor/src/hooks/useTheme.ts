import React, { useEffect, useState } from 'react'


type Theme = 'light' | 'dark';


export const useTheme = () => {
    const [theme, setTheme] = useState<Theme> (() =>{
        const savedTheme = localStorage.getItem('appTheme') as Theme |null;
        return savedTheme || 'light';
    })

    useEffect(() => {
      localStorage.setItem('appTheme', theme)
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
    },[theme])
    
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
  return {theme, toggleTheme}
}


