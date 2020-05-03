function isString(str: unknown): str is string {
    if (typeof str === 'string') {
        return true;
    }
    return false
}

function log(message: unknown): void | never {
    if (!isString(message)) {
        throw new Error('cannot log non string type ' + message);
    } else {
        console.log(message);
    }
}

log('hello world');
log(12);
log({ obj: 'an object value' });
