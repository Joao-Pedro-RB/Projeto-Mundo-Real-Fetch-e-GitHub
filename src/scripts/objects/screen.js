const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do Perfil do Usuário"/>                         
                            <div class="data">
                                <h1>${user.name ?? 'Não Possui Nome Cadastrado'}</h1>
                                <p>${user.bio ?? 'Não Possui Bio Cadastrada'}</p>
                                <br>
                                <div>👾Seguindo ${user.following}<br>👥Seguidores  ${user.followers}</div>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><br>
            <strong class="estatistics">🍴${repo.forks_count}</strong>
            <strong class="estatistics">⭐${repo.stargazers_count}</strong>
            <strong class="estatistics">👀${repo.watchers_count}</strong>
            <strong class="estatistics">👨🏻‍💻${repo.language}</strong></a></li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário Não Encontrado</h3>"
    }
}

export { screen }