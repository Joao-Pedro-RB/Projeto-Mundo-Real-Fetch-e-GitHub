function createRepositoriesItem(repo) {
 return `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}<br><br>
                <strong class="estatistics">🍴${repo.forks_count}</strong>
                <strong class="estatistics">⭐${repo.stargazers_count}</strong>
                <strong class="estatistics">👀${repo.watchers_count}</strong>
                <strong class="estatistics">👨🏻‍💻${repo.language ?? 'N/A'}</strong>
            </a>
        </li>`       
}

export { createRepositoriesItem }