function dosmth() {
    return 'do something ...';
}

function loggerDecorator(fn) {
    const original = fn;

    fn = function (...args) {
        const result = original.apply(this, args);
        console.log('result of logger decorator:', result);
        return result;
    }
    return fn;
}

const decorated = loggerDecorator(dosmth);
decorated();