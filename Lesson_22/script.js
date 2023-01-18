// https://swapi.dev/ people/1/ 

// console.log('start');
// async function swapi(){

//     const response = await fetch(`https://swapi.dev/api/people/1/`)
//     console.log(response);

// }
// swapi()
// console.log('end');
// function swapi() {
//     console.log('start');
//     const response = fetch(`https://swapi.dev/api/people/1/`)
//     console.log(response);
//     console.log('end');
// }


// const list = document.querySelector('.list')
// async function swapi() {
//     try {
//         const response = await fetch(`https://swapi.dev/api/people/1/`);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//         const data = await response.json()
//         list.innerHTML = `<li><h2>${data.name}</h2></li>`
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// swapi()


// async function swapi() {
//     const response = await fetch(`https://swapi.dev/api/people/1/`);
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }
//     return await response.json()

//     // return data;
// }
// swapi()
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))



// Послідовні запити
// async function foo() {
//     const resp1 = await fetch(`https://swapi.dev/api/people/1/`);
//     const resp2 = await fetch(`https://swapi.dev/api/people/2/`);
//     const resp3 = await fetch(`https://swapi.dev/api/people/3/`);
//     const resp4 = await fetch(`https://swapi.dev/api/people/4/`);

//     if(!resp1.ok){
//         throw new Error(resp1.statusText)
//     }

//     const data1 = await resp1.json()
//     const data2 = await resp2.json()
//     const data3 = await resp3.json()
//     const data4 = await resp4.json()
// }

// foo()


// Паралельні запити

// async function boo() {
//     const arr = [1, 2, 3, 4];
//     const responses = arr.map(async id => {
//         const response = await fetch(`https://swapi.dev/api/people/${id}/`)
//         if (!response.ok) {
//             throw new Error(response.statusText)
//             // Promise.reject('Reject')
//         }
//         return await response.json()
//     })

//     console.log(responses);
//     const data = await Promise.race(responses)
//     console.log(data);
// }
// boo()





// return await Promise.all(responses)


// const data = await Promise.allSettled(responses)
// const resp = data.filter(item => {
//     if (item.status === 'fulfilled') {
//         return item.value
//     }
// })
// return resp

//     return data.filter(item => item.status === 'fulfilled').map(item => item.value)



// }

// boo()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))




// Налаштування HBS

// 1. npm install --save-dev parcel-transformer-hbs

// 2. В файлі .parcelrc добавити наступне
// "transformers": {
//     "*.hbs": [
//       "parcel-transformer-hbs"
//     ]
//   }