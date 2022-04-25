import React, { useEffect } from 'react';
// import { blue } from '@mui/material/colors';
import PropTypes from 'prop-types';
import {
	Typography,
	Button,
	Dialog,
	// AddIcon,
	// Avatar,

	// PersonIcon,
	// ListItemAvatar,
	DialogTitle,
	DialogContentText,
} from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export const FormDialog = (props) => {
	function SimpleDialog(props) {

		const { onClose, selectedValue, open } = props;

		const handleClose =() => {
			console.log('handling close')
			onClose(selectedValue);
		};
		const handleSubmit = async() => { 
			console.log('in handle submit')
		 }

		// const handleListItemClick = (value) => {
		// 	onClose(value);
		// };

		return (
			<Dialog
				onClose={handleClose}
				open={open}
				PaperProps={{ sx: { width: '60%', height: '50%' } }}
			>
				<DialogTitle>Client Detail Confirmation</DialogTitle>


				{props.newClient && (
					<div>
						<DialogContentText>
							First Name:{props.newClient.firstName}
						</DialogContentText>
						<DialogContentText>
							Last Name:{props.newClient.lastName}
						</DialogContentText>
						<DialogContentText>Date:{props.newClient.date}</DialogContentText>
						<DialogContentText>City:{props.newClient.city}</DialogContentText>

						<Button onClick={handleSubmit} variant='outlined'>Confirm</Button>
						<Button variant='outlined' onClick={handleClose} color='secondary'>
							Return
						</Button>
					</div>
				)}
			</Dialog>
		);
	}

	SimpleDialog.propTypes = {
		onClose: PropTypes.func.isRequired,
		open: PropTypes.bool.isRequired,
		selectedValue: PropTypes.string.isRequired,
	};

	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);

	useEffect(() => {
		if (props.openDialog) {
			console.log('Going to open it');
			setOpen(true);
		}
	}, [props.openDialog]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
		props.handleCloseDialog();
	};
	console.log(props.openDialog);
	console.log(props.newClient);
	return (
		<div>
			<Typography variant='subtitle1' component='div'>
				{/* Selected: {selectedValue} */}
			</Typography>
			<br />
			{/* <Button variant='outlined' onClick={handleClickOpen}>
				{props.buttonName}
			</Button> */}
			<SimpleDialog
				selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
				newClient={props.newClient}
			/>
		</div>
	);
};
