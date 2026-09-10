function removeSpace(){

    let str = "I     am      Good";
    let value="";

    for(let i=0;i<str.length;i++){

        if(str[i] !== " " || str[i-1] !== " "){
           value = value + str[i]; 
        }
    }
    console.log(value);
}
removeSpace();