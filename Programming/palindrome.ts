function triangle(){

    let palindrom = "kannan"
    let reverse="";

    for(let i =palindrom.length-1;i>=0;i--){
        reverse = reverse + palindrom.charAt(i);
    }
    
    if (palindrom == reverse ){
        console.log(reverse+ " Is the palindrome")
    }
    else{
        console.log(reverse+ "Is not the palindrome")
    }
}
triangle();