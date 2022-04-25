import './App.css';
import { BrowserRouter, Redirect,Navigate, Route, Routes } from 'react-router-dom';

//pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useMsal } from '@azure/msal-react';
import { RouteGuard } from './components/RouteGuard';
import { appRoles } from './msal/AuthConfig';
import VolunteerSignin from './pages/volunteer-signin/VolunteerSignin';
import React from 'react'

function App() {
	const { instance, accounts } = useMsal();

	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
					<Navbar />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={accounts.length > 0 ? <Dashboard />:<Navigate to='login'/>}
						/>
						<Route path='/volunteersignin' element={<VolunteerSignin />} />

						<Route
							path='/login'
							element={!accounts.length > 0 ? <Login /> : <Dashboard />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

// import './App.css';
// import { useState, useEffect, useCallback } from 'react';

// function App() {
// 	const [clients, setClients] = useState([]);
// 	const getUsers = useCallback(async () => {
// 		const response = await fetch('http://localhost:8000/clients');
// 		const data = await response.json();
// 		console.log(data);
// 		setClients(data);
// 	}, []);
// 	useEffect(() => {
// 		getUsers();
// 	}, [getUsers]);

// 	return (
// 		<div className='App'>
// 			<nav>
// 				<h1>My Articles</h1>
// 				<button onClick={getUsers}>Get Users</button>
// 				<button>Add User</button>
// 				{clients &&
// 					clients.map((user) => (
// 						<li key={user.id}>
// 							<h3>{user.firstName}</h3>
// 						</li>
// 					))}
// 			</nav>
// 		</div>
// 	);
// }

// export default App;
