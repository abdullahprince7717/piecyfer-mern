// Type Alias: User

console.log("Hello World");
type User = {

    name: string;
    email :string;
    address: {
        city: string;
        state: string;
    }
}


const createUser = (user: User) => {

    console.log(user.name);
}

createUser({name: "Ali", email : "abc@gmail.com", address:{city: "Lahore", state: "Punjab"}})

export {}

