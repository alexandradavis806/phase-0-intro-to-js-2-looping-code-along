// Code your solutions in this file


// for (let age =30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }


const writeCards = (arr, event) => {
    let newArr = []
    for (let i=0; i < arr.length; i++) {
       newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


const countDown = () => {
    let countup = 10;
    while (countup > -1)
    console.log(countup--);
}

console.log(countDown(10));