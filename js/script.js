    const server = 'http://127.0.0.1:8000'
    

async function sendResponse(){
    body = {
        type:  "retell",
        text: document.querySelector('.text_input').value
    }
    console.log("Test")
    fetch(server, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(body)
    }).then(function(response) {
        console.log(response)
        return response.json();
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        sendResponse()
    });
})




