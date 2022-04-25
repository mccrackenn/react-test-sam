import {AuthContext} from '../context/auth/AuthContext'
import { useContext } from 'react'

export const useAuthContext =() => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('UseAuthContext must be inside an AuthContext Provider')
    }

    return context;
}