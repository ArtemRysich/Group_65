// https://www.freecodecamp.org/ukrainian
// https://www.codewars.com/
// https://jobs.dou.ua/first-job/?from=doufp
// const str = document.querySelector('.js-custom');
// const str = document.querySelector('#hello');
// const arr = document.querySelectorAll('.js-qwerty')
// const arr = document.getElementsByClassName('js-custom')
// console.log(arr);


// const list = document.querySelector('.js-list')
// const input =document.querySelector('.js-input')



// const li = document.createElement('li');
// const span = document.createElement('span');
// list.style.listStyle = 'none';
// span.textContent = 'Hello world';
// span.classList.add('text')
// li.append(span)
// list.append(li)
// // li.classList.remove('text')
// li.classList.toggle('text')




// input.value = "Hello from JS"
// console.dir(input);



// const list = document.querySelector('.js-list')
// const markup = `<li class="text"><span>Hello from <a>JS</a></span></li>`


// list.insertAdjacentHTML("beforeend",markup)


// const list = document.querySelector('.js-list')
// const listStatic = document.querySelectorAll('.js-item')
// const listDynemic = document.getElementsByClassName('js-item')


// console.log('listStatic',listStatic);
// console.log('listDynemic',listDynemic);
// console.log('before',listDynemic[listDynemic.length-1].textContent);

// let markup ='';
// const lastItem = Number(list.lastElementChild.textContent);
// for(let i = 1; i<=5; i+=1){
//     markup += `<li class="js-item">${lastItem + i}</li>`
// }
// // console.log(markup);
// list.insertAdjacentHTML('beforeend',markup)
// console.log('after',listDynemic[listDynemic.length-1].textContent);


const cars = [{
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        id: 4,
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
]

{
    /* <li><img src="" alt=""><h2></h2><h3></h3><p></p></li> */
}
const list = document.querySelector('.js-cars');


const markup = cars.map(({
    img,
    model,
    type,
    price
},idx) => `<li data-carId="${111+idx}" data-test="test" data-custom="custom">
<img src="${img}" alt="${model}" class="image">
<h2>Марка: ${model}</h2>
<h3>Модель ${type}</h3>
<p>Ціна ${price} <span>$ </span></p>
</li>`).join('')

// console.log(markup);
list.insertAdjacentHTML('beforeend', markup)
// list.innerHTML = markup;
const li = document.querySelector('li');
li.setAttribute('hidden',true);
// li.removeAttribute('hidden');
console.log(li.hasAttribute('hidden'));
// console.log(li.dataset.test);
// const id = li.dataset.carid
//  const str =p.textContent
// console.dir(id);
// console.dir(list.children);
// list.innerHTML = '';
// [...list.children].forEach(li => li.remove())