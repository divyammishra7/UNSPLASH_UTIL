import { createContext,useContext,useState,useEffect, Children } from "react";
const AppContext=createContext();
export const AppProvider=({children})=>{
    const getInitialDarkMode=()=>{
        const prefer=window.matchMedia('(prefers-color-scheme:dark)').matches
        return prefer 
    }
    const [isDarkTheme,setDarkTheme]=useState(getInitialDarkMode());
    const [searchTerm,setSearchTerm]=useState('dog');
   
    const toggleDarkTheme=()=>{
        const newDarkTheme=!isDarkTheme;
        setDarkTheme(newDarkTheme);
        
    }
    useEffect(()=>{
        document.body.classList.toggle('dark-theme',isDarkTheme);
    },[isDarkTheme])
    return (<AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>)
}
export const useGlobalContext=()=>useContext(AppContext);