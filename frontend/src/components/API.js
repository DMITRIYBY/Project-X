import host from "./setupHOST";

export const fetchGettingStarted = async (req) => {
    const resp = await host.get(req);
    console.log(resp.data);
}

export const fetchLogin = async (login, pass) => {

    let body = {
        "login" : login,
        "password" : pass
    }

    const resp = await host.post('/Auth', body);
    if(resp.data){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

export const getClient = async () => {
    const resp = await host.get('/api/getClients');
    console.log(resp.data);

    return resp;
}

export const addClient = async (id, name, email, password) => {
    host.post('/api/addClient', { id, name, email, password})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

};