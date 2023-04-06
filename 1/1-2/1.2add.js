// 1) чусон
const user = {
    email: "example.com",
    password: 123,
};

const copyUser = user; 
copyUser,password = 22;
user,password = 99;
console.log(copyUser,user);

const shallowCopyUser = {
    ...user,
}
const deepCopy = JSON.parse(JSON.stringify(user));

shallowCopyUser.password = 90;
deepCopy.password = 55;
console.log (shallowCopyUser,user,deepCopy)

// 2) рекурсия
const factorial = (number) => {
    if(number === 1){
        return number;
  }
  return number * factorial(number - 1);
};
console.log(factorial(3) , factorial(5))
