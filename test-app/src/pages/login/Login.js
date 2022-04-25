import React from 'react';
import Card from '@mui/material/Card';
import { CardActions, CardContent, Typography,Button } from '@mui/material';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../../msal/AuthConfig';
import { useNavigate } from 'react-router';




export default function Login() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const { user } = useAuthContext();
    const { instance,accounts } = useMsal();
	const navigate=useNavigate()

	console.log(loginRequest)
	const handleLogin = async() => {

		try {
			const response = await instance.loginPopup(loginRequest)
			console.log(response)
			console.log("here")
			if(response){
				//history.push("/")
			}
			
		} catch (error) {
			console.log(error)
		}
            // instance.loginPopup(loginRequest).then(response=> console.log(response)).catch(e => {
            //     console.log(e);
           // });
    }
	const handleLogout = () => {
            instance.logoutPopup().catch(e => {
                console.log(e);
            });

    }


	//console.log(isAuthenticated)
	console.log(accounts)
	if(accounts.length > 0){
		console.log('Got a user!')
	}
	return (
		<>
			{/* <form onSubmit={handleSubmit} className={styles['login-form']}>
				<h2>Login</h2>
				<label>
					<span>Email:</span>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				{!isPending && <button className='btn'>Login</button>}
				{isPending && (
					<button className='btn' disabled>
						loading
					</button>
				)}
				{error && <p>{error}</p>}
				<p>{user && user.email}</p>
			</form> */}
			<Card sx={{minWidth:275,minHeight:275}} variant="outlined">
				<CardContent>
					<Typography sx={{fontSize:16}} color="text.secondary">
						Login
					</Typography>
				</CardContent>
					<CardActions>
						<Button onClick={handleLogin} variant ="outlined" size='small'>Sign In</Button>
						<Button onClick={handleLogout} variant ="outlined" size='small'>Sign Out</Button>
					</CardActions>

			</Card>
		</>
	);
}
