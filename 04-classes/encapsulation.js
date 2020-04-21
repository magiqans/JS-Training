function User(name) {
    this.name = name;
    let admin = false;
    this.isAdminRole = () => {
        return admin;
    }

    function makeAdmin() {
        admin = true;
    }
    makeAdmin(); // intermediate call
}

const vasya = new User('Vasya'); // he is admin