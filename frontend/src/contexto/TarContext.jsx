import { createContext, useContext } from "react";
import { crearTareas } from "../api/tar.js";

const TarContext = createContext()

export const useTarea = () => {
    const context = useContext(TarContext)
    if(!context){
        throw new Error('useTarea puede ser usada sin TarProvider') 
    }
    return context
}

export function TarProvider({children}) {
    //const {tar, setTar} = useState([])
    const crearTarea = (tar) => {
        const res = crearTareas(tar)
        console.log(res)
    }
    return(
        <TarContext.Provider
        value= {{
            tar,
            crearTarea
        }}
        >
            {children}
        </TarContext.Provider>
    )
}