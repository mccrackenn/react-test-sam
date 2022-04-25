import { createContext, useReducer } from 'react';
import axios from 'axios';
// import { useMsal } from '@azure/msal-react';
// import { loginRequest } from '../../msal/AuthConfig';
// import { msalInstance } from '../../index';
import { useFetch } from '../../hooks/useFetch';
import React from 'react'

export const ClientContext = createContext();

export const reduces = (state, action) => {
	switch (action.type) {
		case 'GET_CONTACTS':
			return {
				...state,
				clients: action.payload,
			};
		case 'ADD_CONTACT':
			return {
				...state,
				clients: [...state.clients, action.payload],
			};
		default:
			return state;
	}
};

export const ClientContextProvider = ({ children }) => {
	const { getToken } = useFetch();

	const [state, dispatch] = useReducer(reduces, {
		clients: null,
		error: null,
	});

	const getClients = async () => {
		const token = await getToken();

		try {
			const res = await axios.get('http://localhost:5000/api/clients', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `bearer ${token}`,
				},
			});
			console.log(res);
			if(res.status===200){
				dispatch({type:'GET_CONTACTS',payload:res.data})
			}
			
		} catch (error) {
			console.log(error)
		}
	};

	const addClient = async (client) => {
		console.log('made it to Context');
		console.log(client);
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/api/clients',
				client,
				config
			);
			dispatch({ type: 'ADD_CONTACT', payload: res.data });
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<ClientContext.Provider value={{ ...state, addClient, getClients }}>
			{children}
		</ClientContext.Provider>
	);
};
