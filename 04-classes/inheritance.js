class Animal {
    say() {
        // say smth.
    }
}

class Rabbit extends Animal {
    say() {
        console.log('rabbit say');
    }
}

const rabbit = new Rabbit();
rabbit.say(); // rabbit say
