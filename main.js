let axios = require('axios');

let data = {
    "token": "dade8c42e3a99c1a273b8235276131343076c3d3",
    "username": "devdanielcodes"
}

let body = {
    "query": `

    query { 
        user(login: ${data.username}){
          name
          avatarUrl
          repositories(last: 20){
            nodes{
              name
              primaryLanguage {
                color
                name
              }
              stargazerCount
              forkCount
              updatedAt
            }
          }
        }
      }
    
            `
}

let header = {
    "Content-Type": "application/json",
    "Authentication": "bearer "+ data.token
}

axios.post('https://api.github.com/graphql', {
    headers: header,
    body: JSON.stringify(body)
})
.then((response) => console.log(response))
.catch((error) => console.log(JSON.stringify(error)))