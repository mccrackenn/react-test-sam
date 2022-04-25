import './Dashboard.css';
import DataTable from '../../components/data-table/DataTable';

import React, { useEffect } from 'react';
import { useClientContext } from '../../hooks/useClientContext';
import { useMsal } from '@azure/msal-react';

export default function Dashboard() {
	//const { user, loadUser } = useAuthContext();
	const { getClients, clients } = useClientContext();
	const { accounts } = useMsal();
  
  
  useEffect(() => {
    
    if(accounts.length > 0){

      getClients()
    }
    
    // eslint-disable-next-line
  },[])

	return <DataTable clients={clients}></DataTable>;
}
