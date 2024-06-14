import brcypt from "bcryptjs"
const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: brcypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Chetan",
        email: "chetan@gmail.com",
        password: brcypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Abhi",
        email: "abhi@gmail.com",
        password: brcypt.hashSync("123456", 10),
        isAdmin: false,
    },
];
export default users;