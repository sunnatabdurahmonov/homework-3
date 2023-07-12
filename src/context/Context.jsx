import { createContext, useEffect } from "react";
import { useState } from "react";

 export const HeaderContext =  createContext()

 export const HeaderContextProvider = ({children}) => {
    const langLocal = window.localStorage.getItem('lang')
    const [headerTitle,setHeaderTitle] = useState("Overview")
    const [commentId,setCommentId] = useState(null)
    const [theme,setTheme] = useState(false)
    const [lang,setLang] = useState(langLocal || 'en')

    let info = {
        headerTitle: headerTitle,
        setHeaderTitle: setHeaderTitle,
        commentId,
        setCommentId,
        theme,
        setTheme,
        lang,
        setLang,
    }
    useEffect(() => {
        window.localStorage.setItem('lang', lang)
    },[lang])
    return (
        <HeaderContext.Provider value={info}>
        {children}
       </HeaderContext.Provider>  
    )
 } 