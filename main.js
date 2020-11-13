//const axios = require('axios');
const fetch = require('node-fetch');

const data = {
    token: '2477623315be1cf8495d816a0edeb3d70c979fb0',
    username: 'devdanielcodes'
}

const body = {
    'query': `

    query { 
        user(login: ${data.username}){
          name
          avatarUrl
          repositories(last: 20){
            nodes{
              name
              primaryLanguage {
                id
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

const headers = {
    'Content-Type': "application/json",
    Authentication: `bearer ${data.token}`
}
const myData = []

fetch('https://api.github.com/graphql', {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => {

    console.log(data)
   
   /*  console.log(myData.push({
        name: data.data().name,
        //language: data.data.repositories.nodes
    })) */
})
.catch(error => console.log(JSON.stringify(error)))