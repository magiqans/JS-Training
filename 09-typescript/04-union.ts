type User = {
    name: string;
    email: string;
};
type Admin = {
    isAdmin: boolean;
}
type UserOrAdmin = User | Admin;

type UserAdmin = User & Admin;



