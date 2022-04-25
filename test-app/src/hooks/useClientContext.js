import {ClientContext} from '../context/clients/ClientContext'
import { useContext } from 'react'

export const useClientContext =() => {
    const context = useContext(ClientContext)

    if(!context){
        throw Error('UseClientContext must be inside an ClientContext Provider')
    }

    return context;
}