const user = {
  user1: {
    Name: 'Alex',
    age: 20,
    country: 'Russia',
    isAdmin: true
  }
}
console.log(user.user1)

const greeting = {
  sayHello(name) {
    console.log(`Hello ${name}`)
  }
}
greeting.sayHello('Ignat')

const users = [{
  user1: {
    Name: 'Alex',
    age: 20,
    country: 'Russia',
    isAdmin: true
  },
  user2: {
    Name: 'Olga',
    age: 69,
    country: 'Russia',
    isAdmin: false
  },
  user3: {
    Name: 'John',
    age: 26,
    country: 'Russia',
    isAdmin: false
  },
  user4: {
    Name: 'Kirill',
    age: 33,
    country: 'Russia',
    isAdmin: true
  }
}
]

let count = 0;

for (let i = 0; i < users.length; i++) {
  if (typeof users.isAdmin: === "false") {
    count++;
  }
}

console.log(count)
