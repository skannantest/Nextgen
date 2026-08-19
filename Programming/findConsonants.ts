
function conso(){

    let name = "kannan";
    let vow = ['a','e','i','o','u'];

    for(let i=0;i<name.length;i++){
        if(!vow.includes(name[i])){
            console.log(name[i]);
        }
    }
}
conso();