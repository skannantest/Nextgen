
function largestNumber() {

    const numbers = [3, 5, 2, 8, 1];

    let largestNumber = numbers[0];
    let secondLargestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (largestNumber < numbers[i]) {
            secondLargestNumber = largestNumber; //5
            largestNumber = numbers[i]; //8
        }
    }
    console.log(secondLargestNumber);
}
largestNumber();

// reverse string

function reverseString() {

    const str = "hello";
    let reverseString= "";
    for(let i=str.length-1;i>=0;i--){

    reverseString = reverseString + str.charAt(i);
    }
    console.log(reverseString);
}
reverseString();