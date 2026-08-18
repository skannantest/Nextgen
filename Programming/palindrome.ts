import * as readline from 'readline';

function triangle(){

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question("Enter the string to check palindrome: ", (answer) => {
        
        const palindrom = answer ?? "";
        let reverse = "";

        for (let i = palindrom.length - 1; i >= 0; i--) {
            reverse += palindrom.charAt(i);
        }

        if (palindrom === reverse) {
            console.log(palindrom + " is a palindrome");
        } else {
            console.log(palindrom + " is not a palindrome");
        }

        rl.close();
    });
}

triangle();