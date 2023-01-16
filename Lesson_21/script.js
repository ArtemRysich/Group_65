// https://jsonplaceholder.typicode.com/
// CRUD


// READ - GET 

// function getAPI(){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText)
//         }

//         return response.json()
//     })
// }

// getAPI().then(data => console.log(data))


// CREATE - POST 
// https://developer.mozilla.org/ru/docs/Web/HTTP/Status/201
const form = document.querySelector('.js-form');
const list = document.querySelector('.js-posts');
const errorMessage = document.querySelector('.js-error')
form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()

    // const {
    //     title,
    //     body
    // } = evt.currentTarget.elements;

    // const obj = {
    //     title: title.value,
    //     body: body.value
    // }


    const {
        title: {
            value: title
        },
        body: {
            value: body
        }
    } = evt.currentTarget.elements;

    const obj = {
        title,
        body
    }
    postAPI(obj).then(data => createPost(data)).catch(err => errorMessage.textContent = `${err} - 😛`)
}



function postAPI(data) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }

    return fetch(`https://jsonplaceholder.typicode.com/posts`, options)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json()
        })
}


function createPost({
    id,
    title,
    body
}) {

    list.insertAdjacentHTML('beforeend', `<li data-postID="${id}">
<h2>${title}</h2>
<p>${body}</p>
</li>`)
}

// postAPI().then(data => console.log(data))