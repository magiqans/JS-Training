function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // Pete or John?

let phrase = 'Hello';

function say(name) {
    console.log(`${phrase}, ${name}`);
}

say('John');