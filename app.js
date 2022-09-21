// Part 1
let url = 'http://numbersapi.com';
let favNum = 23;

let favNumFact = axios.get(`${url}/${favNum}?json`)
console.log(favNumFact)


