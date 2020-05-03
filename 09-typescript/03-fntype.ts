type LoggerFn = (message: string) => void;

const logger: LoggerFn = (message) => {
    console.log(message);
}

type MaybeNumber = number | undefined;

let num2 = 0 as MaybeNumber;

let num: MaybeNumber = 0;

export type User = {
    name: string;
    email: string;
    login(): void;
}
class UIUser implements User {
    name: string = '';
    email: string = '';
    login(): void {
        console.log('success');
    }
}

