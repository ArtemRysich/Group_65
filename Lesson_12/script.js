// const box = document.querySelector('.js-box');
// console.log(box);
// box.addEventListener('click', onCLick);
// let step = 50;

// function onCLick(evt) {
//     console.log(evt.currentTarget);
//     step += 50;
//     evt.currentTarget.style.margin = `${step}px`
// }


// const button = document.querySelector('.js-show');
// const title = document.querySelector('.js-title');

// button.addEventListener('click', getTitle);//, {once: true}

// function getTitle(evt){
//     title.textContent = 'Hello from JS 😍';
//     // evt.currentTarget.disabled = true
//     console.log(evt.currentTarget);

//     evt.currentTarget.removeEventListener('click',getTitle)
// }


// const cars = [{
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
//     }, {
//         id: 33,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
//     }, {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
//     }, {
//         id: 4,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
//     }
// ]

// const form = document.querySelector('.js-search');
// const list = document.querySelector('.js-list')

// form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//     evt.preventDefault()
//     const {
//         queryValue,
//         selectValue
//     } = evt.currentTarget.elements;
//     // const {
//     //     elements: {
//     //         queryValue: {
//     //             value: queryValue
//     //         },
//     //         selectValue: {
//     //             value: selectValue
//     //         }
//     //     }
//     // } = evt.currentTarget

//     const searchResult = cars.filter(item => item[selectValue.value] === queryValue.value)
//     const markup = searchResult.map(({car,type,price, img}) =>` <li>
//     <img src="${img}" alt="${car}" width="300">
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <h4>${price}</h4>
//     </li>`).join('');

//     list.innerHTML = markup;
// }


// // ПЕРЕРВА ДО 21.45


// const input = document.querySelector('.js-input');
// input.addEventListener('focus', onFocus)
// function onFocus(evt){
//     // console.log(evt);
//     console.log("пиши будь-ласка");
// }

// input.addEventListener('blur', onBlur)
// function onBlur(evt){
//     // console.log(evt);
//     console.log("все написав???");
// }
// input.addEventListener('input', onInput)

// function onInput(evt){
//     const query = evt.currentTarget.value;
// //  "asd" => !true => false
// //  query => !false => true
// console.log(query);
//     if(!query){
//         console.log('Пустий рядочок');
//     }
// }


document.addEventListener('keydown', onPress)
// document.addEventListener('')

function onPress(evt) {
    evt.preventDefault()
    // const keyName = 'KeyA'
    // if(evt.code === keyName){
    //     console.log("YEP");
    // }
    console.log(evt);

    if (evt.ctrlKey && evt.code === 'KeyC') {
        alert('NO no no 😂');
        return
    }
    // if(evt.shiftKey){
    //     console.log('Друкуєш великими ?');
    // }
}