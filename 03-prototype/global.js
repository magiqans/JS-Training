function User(name) {
    this.name = name;
    let counter = 0;

    this.sayHello = function () {
        counter++;
        console.log('Hello');
    }

    this.getCounter = function () {
        return counter;
    }
}

const vasya = new User('Vasya');
vasya.sayHello();
vasya.sayHello();
vasya.sayHello();
console.log(vasya.getCounter()); // 3
