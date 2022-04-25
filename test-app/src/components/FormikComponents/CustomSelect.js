import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { ListItem, MenuItem } from '@mui/material';


const CustomSelect = (props) => {
    const {label,name,options, ...rest}=props
    console.log(label)
    console.log(options)

  return (
    <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field as='select' id={name} name={name} {...rest}>
        {options.map((option) => {
            return (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            )
        })}
    </Field>
    {/* <ErrorMessage name={name}  /> */}
</div>
  )
}

export default CustomSelect