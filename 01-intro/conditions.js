let hours = new Date().getHours();

if (hours > 22) {
    console.log('Good Night!');
} else if (hours > 18) {
    console.log('Good Evening!');
} else {
    console.log('Good Day!');
}
