document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      joke = jokeData.joke
    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value
    
    //guard clause
    if(username === "") return;

    fetchJoke() // fetchJoke is an asyncronous function that is pushed off the stack.
      // .then runs once fetch joke is finished running
      .then(() => {
        const newJokeLi = document.createElement('li')
        newJokeLi.innerHTML = `
        <span class="username">${username} says:</span> ${joke}
        `
        jokeList.appendChild(newJokeLi)
      })
  })
})
