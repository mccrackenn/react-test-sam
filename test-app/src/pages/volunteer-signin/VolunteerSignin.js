import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import {
	Button,
	Grid,
	Container,
	Typography,
	Switch,
	FormControlLabel,
} from '@mui/material';
import DatePicker from '../../components/mui-components/date-picker';
import Textfield from '../../components/mui-components/textfield';
import AutoComplete from '../../components/mui-components/autocomplete';
import * as Yup from 'yup';
import TimePicker from '../../components/mui-components/time-picker';
import CustomSelect from '../../components/mui-components/select';
import cities from '../../data/cities.json';
import { ReusableList } from '../../components/list/ReusableList';

const INITIAL_FORM_STATE = {
	firstName: '',
	lastName: '',
	nickname: '',
	date: '',
	timeIn: '',
	timeOut: '',
	city: '',
};

const FORM_VALIDATION = Yup.object().shape({
	date: Yup.date().required('Required'),
});

const VolunteerSignin = () => {
	const [formValues, setFormValues] = useState(null);
	const [runningClientList, setRunningClientList] = useState([]);

	//Function gets a client from AutoComplete Component through props, sets new Form Values
	const handleNew = (value) => {
		if (value.lastName) {
			console.log('In first if');

			const { firstName, lastName, nickname, city } = value;
			setFormValues({
				firstName,
				lastName,
				nickname: nickname ? nickname : '',
				date: '',
				timeIn: '',
				timeOut: '',
				city: city ? city : '',
			});
		} else {
			console.log('In else', value);
			setFormValues({
				firstName: value.firstName,
				lastName: '',
				nickname: '',
				date: '',
				timeIn: '',
				timeOut: '',
				city: '',
			});
		}
	};
	// https://thewebdev.info/2021/05/15/how-to-delete-an-item-from-a-state-array-in-a-react-component/
	const deleteOneListItem = (index) => { //Gets index of item to delete from reusable list component
		setRunningClientList((runningClientList) =>
			runningClientList.filter((item, i) => i === index)
		);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Container maxWidth='lg'>
					<Grid container spacing={2}>
						<Typography variant='h3'>Volunteer Signin</Typography>
					</Grid>

					{/* https://www.youtube.com/watch?v=awCY7qnbkIA */}
					<Formik
						initialValues={formValues || INITIAL_FORM_STATE}
						validationSchema={FORM_VALIDATION}
						enableReinitialize={true} //allows for form to be reinitialized with desired values
						onSubmit={(values) => {
							console.log(values);
							//https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
							setRunningClientList((runningClientList) => [
								...runningClientList,
								values,
							]);
							setFormValues(INITIAL_FORM_STATE);
							console.log(runningClientList);
						}}
					>
						{(props) => (
							<Form>
								<Grid
									container
									spacing={2}
									my={4}
									sx={{
										bgcolor: 'background.paper',
									}}
								>
									<Grid item xs={12}>
										<AutoComplete handleNew={handleNew} />
									</Grid>

									<Grid item xs={4}>
										<DatePicker name='date' label='Date' />
									</Grid>

									<Grid item xs={4}>
										<TimePicker name='timeIn' label='Time In' />
									</Grid>

									<Grid item xs={4}>
										<TimePicker name='timeOut' label='Time Out' />
									</Grid>

									<Grid item xs={6}>
										<Textfield name='firstName' label='First Name' />
									</Grid>

									<Grid item xs={6}>
										<Textfield name='lastName' label='Last Name' />
									</Grid>

									<Grid item xs={12}>
										<CustomSelect name='city' label='City' options={cities} />
									</Grid>

									{props.values.nickname && (
										<Grid item xs={6}>
											<Textfield name='nickname' label='Nickname' />
										</Grid>
									)}

									<Grid item xs={12}>
										<Button
											fullWidth={true}
											variant='contained'
											type='submit'
										>
											Add Volunteer to List
										</Button>
									</Grid>
								</Grid>
								<pre>{JSON.stringify(props.values, null, 4)}</pre>
							</Form>
						)}
					</Formik>
					<ReusableList
						list={runningClientList}
						deleteOneListItem={deleteOneListItem}
					/>
				</Container>
			</Grid>
		</Grid>
	);
};

export default VolunteerSignin;
