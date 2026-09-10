function nonRepeat() {

    let num = "kantnan";
    let nonRepeat = "";
    let found;

    for(let i = 0; i < num.length; i++){

        found = false;

        for(let j = 0; j < num.length; j++){
            if(i !== j && num[i] === num[j]) {  
                found = true;
                break;
            }
        }
        if(!found){
            console.log(num[i]);
        }
    }
}
nonRepeat();