const insertJoke = document.getElementById("joke");
const btn = document.getElementById("btn");

generateJoke();

btn.addEventListener("click", generateJoke);

//USING async & await

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();

  insertJoke.innerText = data.joke;
}

//USING .then()

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       insertJoke.innerText = data.joke;
//     });
// }
