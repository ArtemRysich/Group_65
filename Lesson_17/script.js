// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://www.jscamp.app/ru/docs/javascript25/

// setTimeout(()=>{
//     console.log('setTimeout');
// },5)

// setTimeout(()=>{
//     console.log('setTimeout - 2');
// },0)
// console.time('START');
// console.log("START");



// for(let i = 0; i < 300000; i+=1){
//     console.log(i);
// }

// console.log('END');
// console.timeEnd('START');


// const spam = document.querySelector('.js-spam')
// const clock = document.querySelector('.js-clock')
// const timeEnd = 7000;
// const testButton = document.querySelector('.js-test')

// testButton.addEventListener('click', onClick)

// function onClick(){
//     console.log('I`m click on button');

// }

// clock.textContent = `Реклама зникне через 7`;
// let count = 7

// const id2 = setInterval(() => {
//     count -=1
//     clock.textContent =  `Реклама зникне через ${count}`;
// }, 1000)


// const id = setTimeout(() => {
//     spam.textContent = '';
//     clock.textContent='';
//     clearInterval(id2)
// }, timeEnd)



// const id2 = setInterval(()=>{
//     for (let i = 0; i < 3; i += 1) {
//         console.log('for in setInterval',i);
//     }
// },3000)
// console.log(id);
// console.log(id2);


const dateDay = document.querySelector('.date-day');
const date = document.querySelector('.date');
const dateMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const clockSeconds = document.querySelector('.clock-seconds__arrow');
const clockMinutes = document.querySelector('.clock-minutes__arrow');
const clockHours = document.querySelector('.clock-hours__arrow');

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];


setInterval(() => {
    const endDate = new Date('December 31, 2022 23:59:59');

    const currentDate = new Date();
    const difTime = endDate - currentDate;
    console.log(difTime);
    const timeDay = arrDay[currentDate.getDay()];
    const timeDate = currentDate.getDate();
    const timeMonth = namesOfMonth[currentDate.getMonth()];
    const timeYaer = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();


    const secondsDeg = 360 / 60;
    const minutesDeg = 360 / 60;
    const hoursDeg = 360 / 12;

    const str = `Час - ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`


    dateDay.textContent = timeDay;
    date.textContent = timeDate;
    dateMonth.textContent = timeMonth;
    dateYear.textContent = timeYaer;
    digitalClock.textContent = str;

    clockSeconds.style.transform = `rotate(${seconds * secondsDeg}deg)`;
    clockMinutes.style.transform = `rotate(${minutes * minutesDeg}deg)`;
    clockHours.style.transform = `rotate(${(hours * hoursDeg) + (hoursDeg / 60  * minutes)}deg)`;
}, 1000)

