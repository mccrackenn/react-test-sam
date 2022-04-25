import { DataGrid } from '@mui/x-data-grid';
import React from 'react'


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'state', headerName: 'State', width: 130 },
  { field: 'dogs', headerName: 'Dogs', width: 130 },
  { field: 'householdMembers', headerName: 'People in Household', width: 230 },
  { field: 'diapersNeeded', headerName: 'Diapers Needed', width: 130 },


  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



export default function DataTable(props) {


  console.log(props.clients)
  return (
    <div>
    <div style={{ height: 400, width: '100%' }}>
      <h2>Client Table</h2>
      {props.clients && <DataGrid 
      rows={props.clients}
      columns={columns}
      rowsPerPageOptions={[10]}
      pageSize={10}
      checkboxSelection
      onRowClick={(rowData)=>console.log(rowData)}
      
      />}
    </div>
    </div>
  );
}