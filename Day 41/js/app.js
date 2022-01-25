// Script Goes Here...
const result = document.getElementById("result");
const search = document.getElementById("search");
const listItems = []

getUsers();

async function getUsers() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  result.innerHTML = "";

  insertUserEl(results);
}

function insertUserEl(users) {
  users.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li)

    li.innerHTML = `
            <img src="${user.picture.large}">

            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
    result.appendChild(li);
  });
}

search.addEventListener('input', e => filterUsers(e.target.value))

function filterUsers(searchTerm){

    listItems.forEach(item => {

        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}

