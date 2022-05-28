// dunno what im building yet but i know i neeed this interface ;D


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome! to how well do you know ricky!?!?');
console.log('******************************************')
console.log('Question 1-->')


const run = function() {
    rl.question('How old is ricky? ', (answer) => {
        if (answer === '26') {
            console.log('CORRECT!')
            rl.close();
        } else {
            console.log('Nope! try again!');
            run();
        }
    });
};
run();
