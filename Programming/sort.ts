
function sort(){

    let num = [1,3,11,4,7,6,9,12,1];
    let lastNumber = num[0];

    for(let a=1;a<num.length;a++){
        if(num[a] > lastNumber){
            lastNumber = num[a];
        }
    } // used largest number program here.

    let sortOrder = "asc"; //based on this input ascending and descending will works

    if(sortOrder==="desc"){

    for(let i=lastNumber;i>=1;i--){

        for(let j=0;j<num.length;j++){
        if(i === num[j]){
            console.log(i);
            break; //if has duplicate.
        }
    }
 }
}
else{
    for(let i=1; i<=lastNumber;i++){
        
        for(let j=0;j<num.length;j++){
        if(i === num[j]){
            console.log(i);
            break; //if has duplicate.
        }
    }
    }
}
}
sort()