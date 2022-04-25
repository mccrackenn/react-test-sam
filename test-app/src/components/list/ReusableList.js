import React from 'react';
import './ReusableList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { IconButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const ReusableList = ({ list, deleteOneListItem }) => {


	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			{list.length > 0 && <Typography variant='h3'>Added Volunteers</Typography>}
			<List>
				{list.map((item, index) => (
					<Card key={index} sx={{ marginTop: 2 }}>
						<ListItem key={index} secondaryAction={
              <IconButton onClick={() => deleteOneListItem(index)}>
                <DeleteIcon color='error'/>
              </IconButton>
            }>
							<ListItemText
								sx={{fontStyle:'italic'}} primary={`${item.firstName}  ${item.lastName}`}
								secondary={`Visit Date-${item.date}`}
							/>
						</ListItem>
					</Card>
				))}
			</List>
		</Box>
		// <ul className='person-list'>
		//     {list.map((item,index) => (
		//       <li key={index}>
		//         <p>{`${item.fName} ${item.lName}`}</p>
		//         <button type='button' onClick={() => deleteItem(index)}>X</button>
		//       </li>
		//     ))}
		// </ul>
	);
};
