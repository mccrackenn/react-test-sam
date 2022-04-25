import './Navbar.css';
import React from 'react';
import Dashboard from '../../assets/dashboard.svg';
import { useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
import { loginRequest } from '../../msal/AuthConfig';
import { useNavigate } from 'react-router';


export default function Navbar() {
	//const { user, logout } = useAuthContext();
	const { instance, accounts } = useMsal();
	const navigate = useNavigate();
	

	const handleLogout = () => {
		instance.logoutPopup().catch((e) => {
			console.log(e);
		});
	};

	const handleLogin = async () => {
		try {
			const response = await instance.loginPopup(loginRequest);
			if (response) {
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Dashboard} alt='dashboard Logo' />
					<span>Preston Food Bank</span>
				</li>
				{!accounts.length > 0 && (
					<li>
						<Button onClick={handleLogin} variant='text' size='small'>
							Sign In
						</Button>
					</li>
				)}
				{accounts.length > 0 && (
					<li>
						<Button onClick={handleLogout} variant='text' size='small'>
							Sign Out
						</Button>
					</li>
				)}
			</ul>
		</div>
	);
}
