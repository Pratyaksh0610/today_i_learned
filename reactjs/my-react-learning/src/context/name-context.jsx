import { createContext, useState } from "react";

export const NameContext = createContext();

export default function NameContextProvider({children}){
    const [name,setName]=useState("PPP");
    const toggleName = ((newName)=>setName(newName));
    return (
        <NameContext.Provider value={{name,toggleName}}>
            {children}
        </NameContext.Provider>
    )
}
