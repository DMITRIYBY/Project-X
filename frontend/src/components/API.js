import host from "./setupHOST";

export const fetchGettingStarted = async (req) => {
    const resp = await host.get(req);
    console.log(resp.data);
}