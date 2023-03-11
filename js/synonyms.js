const server = 'https://jsonplaceholder.typicode.com/photos'
    
const headers = {
    'Contant-Type': 'application/json'
}

async function getResponse(){
let response = await fetch(server)
let content =  await response.text()
abc.innerHTML= content
}

async function sendResponse(){
body = {
    type:  "synonyms",
    text: document.querySelector('.text_input').value
}
let response = await fetch(server,{
    method: 'POST',
    body:JSON.stringify(body),
    headers: headers
})
}

window.addEventListener('DOMContentLoaded', () => {
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    sendResponse(),
    getResponse()
});
})




