function User(name) {
    this.name = name;
}

function UserBuilder() {
    this.build = (name = 'Vasya') => {
        return new User(name);
    }
}

const userBuilder = new UserBuilder();
const users = [];

for (let index = 0; index < 5; index++) {
    users.push(userBuilder.build());
}

console.dir(users);