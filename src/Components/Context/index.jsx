import { createContext , useState } from "react"
export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [value , setValue] = useState(false);
    const obj = {value, setValue}
    return (
        <LoginContext.Provider value={obj}>
            {children}
        </LoginContext.Provider>
    )
}
