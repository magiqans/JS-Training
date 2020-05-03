export abstract class Animal {
    abstract property: number;
    abstract eat(): void;
}

class Dog extends Animal {
    property = 0;
    eat(): void {
        // eat implementation
    }
}
