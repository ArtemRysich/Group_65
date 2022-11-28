const obj ={
    name: 'User name',
    inform: {
        age: 22,
        nickName: 'Some Value',
        getNickName(){
            console.log(this.nickName);
        }
    },
    getName(){
        console.log(this.name);
    }

}
obj.inform.getNickName()

// obj.getName()

// const user = {
//     name: 'Test user',
//     customFunction: obj.getName
// }
// user.customFunction()


// const arrow = () => {
//     console.log(this);
// }
// const obj ={
//     name: "User name",
//     myThis: this,
//     getName: ()=> {
//         console.log('in arrow function',this.name);
//     }
// }
// obj.getName()

// console.log("name",name);

// console.log(obj.myThis);
// function declaration(){

// }

// const expression = function(){

// }

// 'use strict'
// function foo() {
//     console.log('declaration',this);
// }
// foo()
// const expression = function () {
//     console.log('expression',this);
// }
// expression()

// console.log('this', this);
// const arrow = () => {
//     console.log('arrow',this);
// }
// arrow()



// const objA = {
//     name: 'User A',
//     getName(age, city) {
//         // console.log('getName', arguments);
//         console.log(`Hello my name ${this.name}, I'm ${age} years old, I'm from ${city}`);
//     }
// }

// const objB = {
//     name: 'User B',
// }

// const objC = {
//     name: 'User C',
// }
// let value = {
//     userAge: 18
// };

// const foo = objA.getName.bind(objB, value.userAge)
// value.userAge = 100500;
// foo()
// foo()
// foo()
// foo()
// foo()
// console.log(foo);
// foo(userAge, 'Kiyv')
// foo(22,'Lviv')
// foo(33,'Odessa')
// foo()
// foo()
// foo()
// foo()
// objA.getName()






// const arr =  [33, 'Odessa'];
// objA.getName.call(objB, 22, 'Lviv')
// objA.getName.apply(objC, arr)
// objA.getName.call(objB, ...arr)

















// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(({
//             name
//         }) => name.toLowerCase() === stoneName.toLowerCase())

//         if (stone) {
//             const {
//                 price,
//                 quantity
//             } = stone;
//             return price * quantity
//         }
//         return 'Empty'
//     },
// };

// console.log(chopShop.calcTotalPrice('EmERald11111')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.
// function  generateId(){
//     console.log('Hello world');
// }
// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return new Date();
//     },
// };


//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
//     console.log(phonebook.contacts)
// console.log(
//     phonebook.add({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );


// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
const arr = [{name: 'name'}]
const calculator = {
    read(a = 0, b = 0) {
        console.log("a",a);
        console.log("b",b);
Number.isNaN()
isNaN()
// console.log(Number(a),isNaN(a));
        if (!isNaN(a) && !isNaN(b)) {
            this.a = Number(a);
            this.b = Number(b);
        } else {
            alert('Будь-ласка вкажіть значення a та b')
        }
    },
    add(){
        return this.a + this.b
    },
    mult(){
        return this.a * this.b
    }
};
// calculator.read('12','44')
calculator.read('12',arr.find(({name}) => name === 'Artem' ))
console.log(calculator.mult());
console.log('test',arr.find(({name}) => name === 'Artem' ));

// const str =123
// console.log(str);
// console.log(str.toString());

// const str = 'abc';
//                          //NaN
// console.log("Number.isNaN(str)",Number.isNaN(str));
// const value = Number(str)
// console.log("isNaN(str)",isNaN(str));