export const msalConfig= {
    auth: {
        clientId:"56714731-2682-4b66-8c69-496127f32383", //using msal-react-spa-toDo on Azure AD
        authority:"https://login.microsoftonline.com/cc17706b-8ddc-4830-9531-517f24705811",//using msal-react-spa-toDo on Azure AD
        redirectUri:"/",
    },
    cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie:false,
    }
};


export const protectedResources = {
    apiTodoList: {
        clientsEndpoint: "http://localhost:5000/api/clients",
        dashboardEndpoint: "http://localhost:5000/api/dashboard",
        scopes: ["api://fc75903a-b490-4c3c-8ebe-87c7d884879d/access_as_user"],
    },
}
export const loginRequest ={
    scopes: [...protectedResources.apiTodoList.scopes]
};

export const appRoles = {
    TaskUser: "TaskUser",
    TaskAdmin: "TaskAdmin"
}

export const graphConfig = {
    graphMeEndpoint:'https://graph.microsoft.com/v1.0/me',
}