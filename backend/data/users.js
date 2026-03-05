import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Divyansh Chawla',
    email: 'divyansh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('224466', 10),
  },
  {
    name: 'Alice Smith',
    email: 'alice@example.com',
    password: bcrypt.hashSync('111111', 10),
  }
]

export default users
