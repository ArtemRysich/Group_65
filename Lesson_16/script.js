// const addLocal = document.querySelector('.js-addLocal');
// const getLocal = document.querySelector('.js-getLocal')
// const removeLocal = document.querySelector('.js-removeLocal');
// const addSession = document.querySelector('.js-addSession');
// const removeSession = document.querySelector('.js-removeSession');

// const KEY_LOCAL = 'onAddLocal';

// addLocal.addEventListener('click', onAddLocal);
// getLocal.addEventListener('click', onGetLocal);
// removeLocal.addEventListener('click', onRemoveLocal);
// addSession.addEventListener('click', onAddSession)
// function onAddLocal() {
//     const arr = [1, 2, 3, 4];
//     localStorage.setItem(KEY_LOCAL, JSON.stringify(arr));
// }

// function onGetLocal() {
//     // try {
//     //     const result = JSON.parse(localStorage.getItem(KEY_LOCAL));
//     //     result.forEach(item => console.log(item))
//     //     console.log(result);
//     // } catch (e) {
//     //     console.log(e);
//     // } finally {
//     //     console.log('hello');
//     // }
//     const result = JSON.parse(localStorage.getItem(KEY_LOCAL)) ?? [];
//     result.forEach(item => console.log(item))
//     console.log(result);
// }


// function onRemoveLocal() {
//     // localStorage.removeItem(KEY_LOCAL);
//     localStorage.clear()
// }

// function onAddSession(){
//     const obj = {
//         name:"User",
//         getName(){
//             console.log(`Hello i'm ${this.name}`);
//         }
//     }
//     sessionStorage.setItem('sessionStorage', JSON.stringify(obj))
// }











// ------------------------------------------//


const content = document.querySelector('.content');
const KEY_X = 'keyX';
const KEY_O = 'keyO';
const KEY_PLAYER = "player";
const KEY_COUNTER = "counter"
const endGame = 9;
let counter = JSON.parse(localStorage.getItem(KEY_COUNTER)) || 0;
let player = localStorage.getItem(KEY_PLAYER) || 'X';

const stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
const stepO = JSON.parse(localStorage.getItem(KEY_O)) || [];



function autoComplite() {
    [...content.children].forEach(item => {
        const id = Number(item.dataset.id)
        if (stepX.includes(id)) {
            item.textContent = "X";
        } else if (stepO.includes(id)) {
            item.textContent = "O";
        }
    })
    console.dir(content);
}




function createMarkup() {
    let markup = '';

    for (let i = 1; i <= 9; i += 1) {
        markup += `<div class="item" data-id="${i}"></div>`;
    }

    content.innerHTML = markup;
}
createMarkup();
autoComplite()

content.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('item')) {
        return;
    }

    if (evt.target.textContent) {
        return;
    }

    const currentId = Number(evt.target.dataset.id);
    let result = false;
    counter += 1;
    if (player === "X") {
        stepX.push(currentId);
        localStorage.setItem(KEY_X, JSON.stringify(stepX))
        result = isWinner(stepX)

    } else {
        stepO.push(currentId)
        localStorage.setItem(KEY_O, JSON.stringify(stepO))
        result = isWinner(stepO)
    }

    evt.target.textContent = player;

    if (result) {
        chempion(player);
        return;
    }

    if (counter === endGame) {
        chempion("RESTART GAME")
        return;
    }

    player = player === "X" ? "O" : "X";
    localStorage.setItem(KEY_PLAYER, player)
    localStorage.setItem(KEY_COUNTER, JSON.stringify(counter))
}



const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function isWinner(arr) {
    console.log("історія ходів", arr);
    return wins.some(item => {
        console.log("item", item);
        const result = item.every(id => {
            console.log("id", id);
            return arr.includes(id)
        })
        console.log('result', result);
        return result
    })
}

function isWinner(arr) {
    return wins.some((item) => item.every(id => arr.includes(id)))
}

function chempion(player) {
    setTimeout(() => {
        alert(player);
        createMarkup();
        localStorage.clear()
    }, 500)
}
    
