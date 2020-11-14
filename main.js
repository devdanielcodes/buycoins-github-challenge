//const axios = require('axios');
const fetch = require('node-fetch');

const data = {
    "token": "dade8c42e3a99c1a273b8235276131343076c3d3",
    "username": "devdanielcodes"
}

const body = {
    "query": `

    query { 
        user(login: "${data.username}"){
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

const header = {
    "Content-Type": "application/json",
    "Authentication": "bearer "+ data.token
}
let myData = {}

fetch('https://api.github.com/graphql', {
    method: "POST",
    headers: header,
    body: JSON.stringify(body)
})
.then((response) => console.log(response))
/* .then((data) => {

    console.log(data)
   
      myData = data
      console.log(myData)
}) */
.catch((error) => console.log(JSON.stringify(error)))