const jsonData = {
    username: "Ernur",
    age:14,
    city:"osh",
};
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(jsonData)
    }, 2000);
});

myPromise.then ((data) => {
const jsObject = JSON.parse(data);
console.log(jsObject);
}).catch((error) => {
    console.log(error);
  });