// Мікро процеси мають БІЛЬШИЙ пріорітет
// 1. Promise
// 2. Observer


// Макро процеси мають МЕНЬШИЙ пріорітет
// setTimeout
// setInterval
// setImmediate
// requestAnimationFrame



// console.log('1');

// setTimeout(()=>{console.log('2')},0)

// Promise.resolve('3').then(value => console.log(value))

// console.log('4');



// Відповідь 1.4.3.2


// const promise = new Promise((res, rej) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if (random > 0.5) {
//             res('Yes 😎')
//         } else {
//             rej('NO 😥')
//         }
//     }, 1000)

// })

// promise
// .then((data)=>{
//     console.log(data)
//     return data
// })
// .then((resp)=>{console.log(resp)})
// .catch((err)=>{console.error(err)})



// promise
// .then((value)=>{
//     console.log(value)
//     return value;
// },(err)=>{
//     console.error(err)
// })
// .then((data)=>{console.log(data)})


// console.log(promise);

// ПЕРЕРВА ДО 20.37


// const start = document.querySelector('.js-start');
// const container = document.querySelector('.js-container');
// const delay = 700;

// start.addEventListener('submit', startGame);

// function startGame(evt) {
//     evt.preventDefault();
//     const arrSmile = [];
//     const arrDol = [];

//     const childrenLength = container.children.length;
//     const {
//         level: {
//             value: level
//         },
//         start
//     } = evt.currentTarget.elements;

//     // const { value: level} = evt.currentTarget.elements.level;


//     start.disabled = true;

//     for (let i = 0; i < childrenLength; i += 1) {
//         const item = container.children[i];
//         item.textContent = ''
//         createPromise(Number(level), '🤩', '🤑', delay * i)
//             .then(resp => {
//                 markField(item, resp);
//                 arrSmile.push(resp);
//             })
//             .catch(resp => {
//                 markField(item, resp)
//                 arrDol.push(resp);
//             })
//             .finally(() => {
//                 if (i === childrenLength - 1) {
//                     start.disabled = false;
//                 }
//                 const result = arrSmile.length === childrenLength || arrDol.length === childrenLength
//                 if (result) {
//                     console.log('You are winner');
//                 }
//             })
//     }
// }


// function markField(item, smile) {
//     item.textContent = smile;
// }

// function createPromise(level, win, lose, delay) {
//     const random = Math.random();

//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             if (random > level) {
//                 res(win)
//             } else {
//                 rej(lose)
//             }
//         }, delay)
//     })

//     return promise
// }





// const resp = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// console.log(resp);

// resp
// .then(resp => resp.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))







// const arr = ['😂', '😋', '🥰'];


// for (let i = 0; i < arr.length; i += 1) {
//     setTimeout(() => {
//         console.log(arr[i]);
//         // console.log(i);

//     }, 1500 * (i + 1)) //60000*(i+1)
// }