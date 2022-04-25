import { useMsal } from '@azure/msal-react';
import { protectedResources } from '../msal/AuthConfig';

export const useFetch = (url, method = 'GET') => {
	const {accounts,instance} = useMsal();


	const getToken = async () => {
		if (!accounts) {
			throw Error(
				'No active account! Verify a user has been signed in and setActiveAccount has been called.'
			);
		}
        const response = await instance.acquireTokenSilent({
            account:accounts[0],
            ...protectedResources.apiTodoList.scopes
        })
        console.log(response);
        return response.accessToken
	};

    return {getToken}
};
