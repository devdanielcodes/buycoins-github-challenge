const fetch = require("node-fetch")

const github_data = {
    "token": "c6d8a9bcd8092fbb701a2e478da81371ccf79976",
    "username": "devdanielcodes"
}

const body = {
    "query": `
    query { 
        user(login: ${github_data["username"]}){ 
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
              createdAt
            }
          }
        }
      }
    
        `
}

const url = 'https://api.github.com/graphql/'
const header = {
    "Content-Type": "application/json",
    Authentication: "bearer " + github_data["token"]
}

fetch(url, {
  method: "GET",
  headers: header,
  body: JSON.stringify(body),
})
.then(response => JSON.stringify(response))
.then(response => console.log(response))
.catch(err => console.log(JSON.stringify(err)))