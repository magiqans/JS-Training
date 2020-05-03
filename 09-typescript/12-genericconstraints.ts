export class User {
    constructor(
        public readonly username: string,
        public readonly password: string) { }
}
export class Admin extends User {
    isAdmin = true;
}

function display<T extends User>(user: T) {
    console.log(user.username + user.password)
}

display(new User('Vasya', '123'));
display(new Admin('Vasya', '1234'));
display({ username: 'Vasya', password: '2134' });

