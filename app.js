// Part 1
let url = 'http://numbersapi.com';
let favNum = 23;

let favNumFact = axios.get(`${url}/${favNum}?json`)
console.log(favNumFact)


// Part 2
let favNums = [23, 92, 30];

axios.get(`${url}/${favNums}`)
    .then(res => {
        console.log("First fact")
        console.log(res.data)
        return axios.get(res.data.text)
    })
    .then(res => {
        console.log("Second fact")
        console.log(res.data)
        return axios.get(res.data.text)
    })
    .then(res => {
        console.log("Third fact")
        console.log(res.data)
    })
    .catch(err => console.log("rejected", err))

// Part 3

let numFacts = [];

axios.get(`${url}/${favNum}`)
    .then(res => {
        console.log("First fact")
        console.log(res.data)
        numFacts.push(res.data)
        return res.data.text
    })
axios.get(`${url}/${favNum}`)
    .then(res => {
        console.log("Second fact")
        console.log(res.data)
        numFacts.push(res.data)
    })
axios.get(`${url}/${favNum}`)
    .then(res => {
        console.log("Third fact")
        console.log(res.data)
        numFacts.push(res.data)
    })
axios.get(`${url}/${favNum}`)
    .then(res => {
        console.log("Fourth fact")
        console.log(res.data)
        numFacts.push(res.data)
        numFacts.forEach(fact => {
            $("body").append(`<p>${fact}</p>`);
        });

    })
    .catch(err => console.log("rejected", err))
