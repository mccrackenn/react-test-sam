import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientContextProvider } from './context/clients/ClientContext';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './msal/AuthConfig';

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
export const msalInstance = new PublicClientApplication(msalConfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<StrictMode>
// 		<MsalProvider instance={msalInstance}>
// 			<ClientContextProvider>
// 				<App />
// 			</ClientContextProvider>
// 		</MsalProvider>
// 	</StrictMode>
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<MsalProvider instance={msalInstance}>
      <ClientContextProvider>
			<App />
      </ClientContextProvider>
		</MsalProvider>
	</React.StrictMode>
);
