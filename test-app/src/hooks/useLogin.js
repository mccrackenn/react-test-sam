import { useEffect, useState } from 'react';
import axios from 'axios';
import SetAuthToken from '../utils/SetAuthToken'
//import { useAuthContext } from './useAuthContext';
import setAuthToken from '../utils/SetAuthToken';


export const useLogin = () => {
	// const [isCancelled, setIsCancelled] = useState(false);
	// const [error, setError] = useState(null);
	// const [isPending, setIsPending] = useState(false);
    //const {dispatch,token,loadUser}=useAuthContext();

}
// useEffect(() => {
//         if(token){
//             console.log("We have a token",token)
//             loadUser()
//         }
//     },[])

// 	// const login = async (email, password) => {
// 	// 	setError(null);
// 	// 	setIsPending(true);

// 	// 	try {

//     //         const response = await axios.post('http://localhost:5000/api/auth',{email,password})

// 	// 		// const response = await fetch('http://localhost:5000/api/auth',{
//     //         //     method:'POST',
//     //         //     //Need the headers for CORS pre-flight check
//     //         //     headers:{
//     //         //     'Content-Type': 'application/json',
//     //         //     'Accept':'application/json'
//     //         //     },
//     //         //     body:JSON.stringify({
//     //         //         email,
//     //         //         password
//     //         //     })
//     //         // })

//     //         if (!response) {
// 	// 			throw new Error('Could not complete signup');
// 	// 		}
            
//     //         if(!isCancelled){
//     //             setIsPending(false)
//     //             setError(null)
//     //         }
//     //         console.log(response.data)
//     //         if(localStorage.token){
//     //             console.log('Got a token')
//     //             SetAuthToken(localStorage.token)
//     //         }
//     //         //const responseData = await response.json();
//     //         dispatch({type:'LOGIN',payload:response.data})
               
            
// 	// 	} catch (err) {
//     //         if (!isCancelled) {
// 	// 			console.log(err.message);
// 	// 			setError(err.message);
// 	// 			setIsPending(false);
// 	// 		}
//     //     }
// 	// };
//     useEffect(() => {
// 		return () => setIsCancelled(true);
// 	}, []);

//     return {error,isPending}
// };
