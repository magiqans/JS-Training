/**
* Необходимо без выполнения кода и открытия его в редакторе
* определить результат выполнения.
*
* Чему будет равно значение переменной result?
*/

function mystery(input) {
    var secret = 4;
    input += 2;
    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}

function mystery3(param) {
    function mystery4(bonus) {
        return param(6) + bonus;
    }
    return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);


/**
* Реализовать две функции: repeat и sequence
*
* Напиши функцию создания генератора sequence(start, step).
* При вызове она возвращает другую функцию-генератор,
* которая при каждом вызове дает число на 1 больше предыдущего вызова, и так до бесконечности.
*
* Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
* Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
* Генераторов можно создать сколько угодно.
*
* @param start - начальное число, с которого начинать отсчет.
* Начальное значение по умолчанию равно 0.
* @param step - шаг, задается при создании генератора.
* Шаг можно не указывать, тогда он будет равен одному
*
* @return function - вызове возвращает другую функцию-генератор,
* которая при каждом вызове дает число начиная с start на step больше, и так до бесконечности
*/
function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    return function () {
        var result = start;
        start += step;
        return result;
    }
}

/**
* Функция вызвает переданную функцию func заданное число (times) раз
*
* @param func - функция, которая будет вызываться
* @param times - сколько раз нужно вызвать функцию func
*/
function repeat(func, times) {
    var result = [];
    for (var time = 0; time < times; time++) {
        var value = func();
        result.push(value);
    }
    console.log(result);
}

var generator = sequence(10, 3);
var generator2 = sequence(0, 2);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 0

repeat(generator2, 5); // [2, 4, 6, 8, 10]