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


// Use of utility types
// Partial<T>
// Creates a new type from another, with all the properties set to optional

// Required<T>
// Readonly<T>
// Pick<T, K>
// Constructs a type by picking the set of properties Keys

// Omit<T, K>
// Record<K, T>

// Task, given this type.
interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Create a type with only name and email (Pick)
type PickedUser = Pick<User, "name" | "email">;

// Create a type with everything except isAdmin (Omit)
type OmitUser = Omit<User, "isAdmin">;

// Create a readonly version of the user (Readonly)
const someUser: Readonly<User> = {
    id: '12',
  name: "Homer",
  email: "homer@simpson.com",
  isAdmin: true
};
// Create a partial update type (like when doing PATCH requests) (Partial)