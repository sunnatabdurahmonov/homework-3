import { createContext, useEffect } from "react";
import { useState } from "react";


 export const HeaderContext =  createContext()

 export const HeaderContextProvider = ({children}) => {
    const [headerTitle,setHeaderTitle] = useState("Overview")
    const [commentId,setCommentId] = useState(null)

    const [theme,setTheme] = useState(false)


    let info = {
        headerTitle: headerTitle,
        setHeaderTitle: setHeaderTitle,
        commentId,
        setCommentId,
        theme,
        setTheme,

    }
    return (
        <HeaderContext.Provider value={info}>
        {children}
       </HeaderContext.Provider>  
    )
 } 