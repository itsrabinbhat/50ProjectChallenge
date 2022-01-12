// Script Goes Here...
const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const cardContainer = document.querySelector("#card-container");

search.focus()

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  search.value = "";

  if(user){
    getUser(user);
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    insertUser(data);
    getRepos(username)
  } catch (err) {
    if(err.response.status == 404){

        insertErrEl('User Does Not Exit!')
    }
  }
}

async function getRepos(username) {
    try {
      const { data } = await axios(API_URL + username + '/repos?sort=created');
  
      insertRepos(data);
    } catch (err) {
  
          insertErrEl('Error Fetching Repos!')

    }
  }

function insertErrEl(msg){

    cardContainer.innerHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
}

function insertUser(userData) {
  const { avatar_url, name, bio, followers, following, public_repos } =
    userData;

  cardContainer.innerHTML = `<div class="card">
  <div
    class="profile-img"><img src="${avatar_url}"></div>

  <div class="user-info">
    <h3>${name}</h3>

    <p>${bio}</p>

    <ul>
      <li>${followers} <strong>Followers</strong></li>
      <li>${following} <strong>Following</strong></li>
      <li>${public_repos} <strong>Repos</strong></li>
    </ul>

    <div id="repos"></div>
  </div>
  </div>`;
}

function insertRepos(repos){

    const reposContainer = document.getElementById('repos')

    repos.slice(0,5)
    .forEach(repo =>{
        const repoLink = document.createElement('a')
        repoLink.href = repo.html_url;
        repoLink.target = '_blank'
        repoLink.innerText = repo.name

        reposContainer.appendChild(repoLink)
    })
}
