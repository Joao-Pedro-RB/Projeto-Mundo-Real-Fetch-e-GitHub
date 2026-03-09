import { baseUrl } from '../variables.js';

//Buscando o user pela API
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json()
}

export { getUser }