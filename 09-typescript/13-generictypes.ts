export type KeyValue<K extends string, V> = {
    key: K;
    value: V;
}
let pair1: KeyValue<number, string> = { key: 'hello', value: '213' };

class Box<T>{
    constructor(public readonly value: T) {
    }
}

const num = new Box(1);
num.value