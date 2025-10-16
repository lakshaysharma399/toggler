import { createContext, useState } from "react";

export const Context = createContext();  //create the context


export function ThemeProvider({children}){

    const [dark, setDark] = useState(false);

    const toggle = () => setDark(!dark);

    return (
        <Context.Provider value={{dark, toggle}}>
            {children}

        </Context.Provider>
    );




}




