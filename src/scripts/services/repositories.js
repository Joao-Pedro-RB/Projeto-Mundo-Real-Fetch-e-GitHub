import { baseUrl, repositoriesQuantity } from '../variables.js';

//Buscando os Repositorios pela API
async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await response.json()
}

export { getRepositories }