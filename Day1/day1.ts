// Basic types
const username: string = 'JohnDoe';
const age: number = 30;
const isActive: boolean = true;

// Task: Create a User interface with
// username: string
// age: number
// email: string
// readonly id: string

interface User { 
    username: string;
    age: number;
    email: string;
    readonly id: string;
}

// Task: Write a function that takes a User and returns a greeting
function GreetUser(user: User): string {
    return `Hello ${user.username}`;
}

// Task: Create a type alias for a Role
type Role = 'admin' | 'editor' | 'viewer';

// Task: Create an extender type AdminUser using the User interface and the Role type
interface AdminUser extends User {
    role: Role;

}