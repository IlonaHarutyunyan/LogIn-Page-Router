import { useLocation } from "react-router-dom";
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from "../Context";

export const Authorization = ({child}) => {
    const context = useContext(LoginContext)
    const location = useLocation()
    
    if(!context.value){
        return <Navigate to="/login" state={{from: location}}/>
    }
    return child
}