export const API: any = {
    login: { rest: 'login' },
    clientData: { rest: 'getClientData?cid={0}' },
    myData: { rest: 'getClientData?cid=1' },
    clientList: { rest: 'getClientList' },
    updateClientData: { rest: 'updateClientData' },
    updateClientBank: { rest: 'updateClientBank' },
    addClientData: { rest: 'addClientData' }
};
