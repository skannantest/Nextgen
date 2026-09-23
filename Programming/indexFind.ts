function findIndex(){

    const arr = [1,2,3,3,4,5,6,7,8,9];
    const searchElement = 5; 

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === searchElement){
        console.log(`${i}`);
      }
    }
}
findIndex();

function findIndexAlphabet(){

    console.log("find index of alphabet");

    const name = "kannan";
    const searchElement = "a"; 

    for (let i = 0; i < name.length; i++) {
      if(name[i] === searchElement){
        console.log(`${i}`);
      }
    }
}
findIndexAlphabet();