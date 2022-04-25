import './Sidebar.css';
import React from 'react';
import DashboardIcon from '../../assets/dashboard.svg';
import AddIcon from '../../assets/add_icon.svg';
import VehicleIcon from '../../assets/truck_icon.svg';
import { NavLink } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


export default function Sidebar() {
	
	const { accounts } = useMsal();

	return (
		<div className='sidebar'>
			<div className='sidebar-content'>
				<div className='user'>
					{/* avatar and username here later */}
					<p>{accounts.length > 0 ?'Hello '+accounts[0].name:''}</p>
				</div>
				<nav className='links'>
					<ul>
						<li>
							<NavLink to='/' exact>
								<img src={DashboardIcon} alt='dashboard icon' />
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/create'>
								<img src={AddIcon} alt='add' />
								<span>New Client</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/volunteersignin'>
								<VolunteerActivismIcon />
								<span>Volunteer Sign In</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/Vehicle'>
								<img src={VehicleIcon} alt='vehicle schedule' />
								<span>Delivery</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
