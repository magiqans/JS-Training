// @ts-nocheck
// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }

// }

// Использование:
// let user = new User("Иван");
// user.sayHi();


let MyUser = class {
    say() {
        console.log('hello');
    }
}

function makeClass(phrase) {
    // объявляем класс и возвращаем его
    return class {
        sayHi() {
            // alert(phrase);
        };
    };
}

// Создаём новый класс
let TestUser = makeClass("Привет");
new TestUser().sayHi(); // Привет




class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('hello');
    }
    static toJSON() {
        return `class ${User.name} {...}`;
    }
}

class Admin extends User {
    constructor(name, rights = []) {
        super(name);
        this.rights = rights;
    }
    sayHello() {
        super.sayHello();
        console.log('Admin');
    }
}
const admin = new Admin('vasya');
admin.sayHello();

console.log(User.toJSON())