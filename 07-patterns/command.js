
var carManager = {
    // request information
    requestInfo: function (model, id) {
        return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function (model, id) {
        return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function (model, id) {
        return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }
};
// command pattern
carManager.execute = function (name) {
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
};

// usage
const car = carManager.execute("buyVehicle", "Ford Escort", "453543");
console.log(car);
