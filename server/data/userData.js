import bcrypt from 'bcryptjs'

const users = [
    {
        userName: 'AdminUser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('2222', 10),
        displayName: 'Admin'
    },
    {
        userName: 'JohnDoe',
        email: 'john@example.com',
        displayName: 'John',
        password: bcrypt.hashSync('1234', 10),
    },
    {
        userName: 'JaneDoe',
        email: 'jane@example.com',
        displayName: 'Jane',
        password: bcrypt.hashSync('2343', 10),
    }
]

export default users