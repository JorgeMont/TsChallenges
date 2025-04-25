// Task: Write a generic function tha wraps a value in an array
function GenericFunction<Type>(value: Type): Type[] {
    return [value]
}


// Task: Create a generic interface for an api response
interface someInterface<someType> {
    name: string;
    age: number;
    email: string;
    address: someType
}

// A way to use it is with a custom type
type HomAddress = {
    street: string;
    number: number;
}

const myData: someInterface<HomAddress> = {
    name: 'Homer',
    age: 38,
    email: 'homer@simpson.com',
    address: {street: 'evergreen', number: 2}
}