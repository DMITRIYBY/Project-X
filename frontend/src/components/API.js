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
