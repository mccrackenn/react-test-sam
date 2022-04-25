import React, { useEffect, useState } from 'react';
import {
	TextField,
	Autocomplete,
	createFilterOptions,
	Button,
} from '@mui/material';
import { clientList } from '../../../models/Client';

const filter = createFilterOptions({
	stringify: ({ firstName, lastName }) => `${firstName} ${lastName}`,
});

const AutoComplete = (props) => {
	const [value, setValue] = useState(null);

	useEffect(() => {
		if (value) {
			setValue(value);
			props.handleNew(value);
		}
	}, [value]);

	return (

			<Autocomplete
				value={value}
				onChange={(event, newValue) => {
					if (typeof newValue === 'string') {
						console.log('hello');

						setValue({
							firstName: newValue,
						});
					} else if (newValue && newValue.inputValue) {
						// Create a new value from the user input
						console.log('setting new custom user input');
						setValue({
							firstName: newValue.inputValue,
						});
					} else {
						setValue(newValue);
					}
				}}
				filterOptions={(options, params) => {
					const filtered = filter(options, params);
					const { inputValue } = params;
					// Suggest the creation of a new value
					const isExisting = options.some(
						(option) =>
							inputValue === option.lastName || inputValue === option.lastName
					);
					if (inputValue !== '' && !isExisting) {
						filtered.push({
							inputValue,
							firstName: `Not Found, Add Manually"${inputValue}"`,
							id: 100000,
						});
					}
					return filtered;
				}}
				selectOnFocus
				blurOnSelect={true}
				handleHomeEndKeys
				id='Search By Name'
				options={clientList}
				getOptionLabel={(option) => {
					// Value selected with enter, right from the input
					//   if (typeof option === 'string') {
					//     return option;
					//   }
					// Add "xxx" option created dynamically
					if (option.inputValue) {
						return option.inputValue;
					}
					// Regular option
					return option.firstName;
				}}
				renderOption={(props, option) => (
					<li {...props} key={option.id}>
						{option.firstName} {option.lastName}{' '}
					</li>
				)}
				sx={{ width: 300 }}
				freeSolo
				renderInput={(params) => (
					<TextField {...params} label='Search Volunteers By Name' />
				)}
			/>
		
	);
};

export default AutoComplete;
