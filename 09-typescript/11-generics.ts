function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);

function boxing<T>(item: T) {
    return {
        0: item,
    };
}
let obj1 = boxing('hello world');
let obj2 = boxing(1);
let obj3 = boxing([1, 2, true]);

