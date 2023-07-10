import { createContext, useEffect } from "react";
import { useState } from "react";


 export const HeaderContext =  createContext()

 export const HeaderContextProvider = ({children}) => {
    const [headerTitle,setHeaderTitle] = useState("Overview")
    const [commentId,setCommentId] = useState(null)


    const themeLocal = window.localStorage.getItem('theme')
    const [theme,setTheme] = useState(themeLocal || false)


    let info = {
        headerTitle: headerTitle,
        setHeaderTitle: setHeaderTitle,
        commentId,
        setCommentId,
        theme,
        setTheme,

    }

    useEffect(() => {
        window.localStorage.setItem('theme' , theme)

    },[theme])
    return (
        <HeaderContext.Provider value={info}>
        {children}
       </HeaderContext.Provider>  
    )
 } 