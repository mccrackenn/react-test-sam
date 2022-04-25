import React from 'react';
import { useField,ErrorMessage } from 'formik';
import {
	TextField
} from '@mui/material';

export const MyTextField = ({ label, ...props }) => {

    
	const [field, meta] = useField(props);
	return (
		<TextField>
			<label htmlFor={field.name}>{label}</label>
			<input
				className={`form-control shadown-none ${meta.touched && meta.error && 'is-invalid'}` }
				autoComplete='off'
				{...field}
				{...props}
			/>
            <ErrorMessage component='div' name={field.name} className='error'/>
		</TextField>
	);
};