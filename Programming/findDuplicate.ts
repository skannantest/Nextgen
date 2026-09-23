function findDuplicate(){

    const name = "kanan";

    for (let i = 0; i < name.length; i++) {
        for(let j=i+1;j<name.length;j++){
            if(name[i] === name[j]){
               console.log(name[i]); 
               break;
            }
        }
    }
}
findDuplicate();