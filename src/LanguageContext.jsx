import {createContext, useContext, useState} from "react";

const LanguageContext = createContext()

export const LanguageProvider=({children})=>{ // todo lo que esté en provider le vas a pasar el contexto para poder utlizar
    const [language, setLanguage]= useState ("en")//inglés
    const changeLanguage= (newLanguage)=>{
        setLanguage(newLanguage)
    };

    return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
        {children}
    </LanguageContext.Provider>
    )
}
//exportamos el hook para utilizar el contexto
export const useLanguage= ()=> useContext(LanguageContext)