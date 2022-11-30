// const arr = [1,2,3,4,5];
// // console.log(arr.map());


const objA = {
    _email: 'test',
    name: "User objA",
    getName() {
        console.log(this.name);
    },
    _getEmail(){

    }
}

const objB = Object.create(objA);
console.log(objB);
// const objC = Object.create(objB);
// objB.name = 'User objB';
// objC.age = 44

// // objC.getName()
// console.log(objC);
// // console.log(objC.age);
// const keys = Object.keys(objC)
// console.log(keys);
// // for (const key in objC) {
// //     if (objC.hasOwnProperty(key)) {
// //         console.log(`${key}`, objC[key]);
// //     }

// // }


// keys.forEach(key => console.log(`${key}`, objC[key]))

// function sayHello(name){
//     console.log(`Hi my name is ${name}, from custom function`);
// }

// String.prototype.qwerty = sayHello;

// const str ='dviudhgyagoxaio';

// https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC-javascript-54462b2989a6

// console.log(typeof str);
// str.qwerty('Artem')


// class User {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1
//         // console.log(this.counter);
//     }
//     static stock = {
//         inStock: 'Product in stock',
//         outStock: 'Product out of stock'
//     }
//     #email;
//     constructor(name, email, age, stock) {
//         this.name = name;
//         this.#email = email;
//         this.age = age;
//         this.stock = stock;
//         User.addUser()
//     }
//     getName() {
//         console.log(this.name);
//     }
//     get getEmail() {
//         const password = prompt('Enter password');
//         if (password === 'qwerty' && this.#checkAge()) {
//             return this.#email;
//         } else {
//             console.log('NO 😥');
//         }
//     }

//     set getEmail(newEmail) {
//         if (newEmail.includes('@') && newEmail.includes('.')) {
//             this.#email = newEmail;
//         } else {
//             console.log('NO 😥');
//         }
//     }
//     #checkAge() {
//         this.getName()
//         if (this.age >= 18) {
//             return true
//         } else {
//             return false
//         }
//     }
// }


// // const objA = new User('User A', 'test@gmail.com', 18, User.stock.inStock)
// // // objA.getName()

// // // console.log(objA.getEmail);
// // // objA.getEmail = 'qwe@gm.mm';

// // const objB = new User('User B', 'test@gmail.com', 30, User.stock.outStock)
// // console.log(objA, objB);
// // const objC = new User('User C', 'test@gmail.com', 30)
// // // console.log(User.counter);
// // console.log('tyt', objC.constructor.counter);
// // console.log("objA", objA);
// // console.log("objB", objB);

// class Warrior extends User {
//     constructor(name, email, age, stock, damage) {
//         super(name, email, age, stock)
//         this.damage = damage;
//     }
// }

// class Mage extends User {
//     constructor(name, email, age, stock, mana) {
//         super(name, email, age, stock)
//         this.mana = mana;
//     }
// }


// class Student extends Mage {
//     constructor(name, email, age, stock, mana, element) {
//         super(name, email, age, stock, mana)
//         this.element = element
//     }
// }



// const objD = new Student('Mage', 'test@gmail.com', 192, User.stock.inStock, 100,'Fire 😈')
// console.log(objD);

// const objA = new Warrior('Warrior', 'test@gmail.com', 18, User.stock.inStock, 500);
// console.log(objA);
// const objb = new Mage('Mage', 'test@gmail.com', 192, User.stock.inStock, 100);
// console.log(objb);
// console.log(User.counter);







// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({
//         name,
//         age,
//         numberOfPosts,
//         topics
//     }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }


// const mango = new User({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts



// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу
// class Storage {
//     constructor(products) {
//         this.items = products;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         if (!this.getItems().includes(item)) {
//             this.items.push(item)
//         }
//     }
//     removeItem(item) {
//         const idx = this.getItems().indexOf(item)
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//         // console.log(~idx)
//         // console.log(!!~idx); // !-1 => !false => true
//         // console.log(Boolean(~idx));
//         console.log(!!~-1);
//         if (!!~idx) {
//             this.items.splice(idx,1)
//         }
//     }
// }

// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// // const items = storage.getItems();
// // console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
// storage.addItem('🍌');
// // console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍋');
// storage.removeItem('😎');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// // Example 4 - Нотатки
// // Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// // {
// //   LOW: 'low',
// //   NORMAL: 'normal',
// //   HIGH: 'high'
// // }
// // Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);



// // Example 5 - Toggle
// // Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// console.log(window);