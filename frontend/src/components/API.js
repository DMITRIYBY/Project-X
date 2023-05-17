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

export const getCurrentApartment = async (id) => {
    const resp = await host.post('/api/getCurrentApartment', {id});
    return resp;
}

export const getComplexes = async (id) => {
    const resp = await host.post('/api/getComplexes', {id});
    return resp;
}

export const getApartment = async () => {
    const resp = await host.get('/api/getApartments');
    console.log(resp);

    return resp;
}

export const addRealtor = async (user_id) => {
    const resp = await host.post('/api/addRealtor', {user_id});
}

export const addClient = async (name, email, password, role) => {
    host.post('/api/addClient', { name, email, password, role})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

};