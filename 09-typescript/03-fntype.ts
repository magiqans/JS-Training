type LoggerFn = (message: string) => void;

const logger: LoggerFn = (message) => {
    console.log(message);
}


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
