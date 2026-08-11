function findIndex(){

    const arr = [1,2,3,3,4,5,6,7,8,9];
    const searchElement = 1; // runtime value from command line

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === searchElement){
        console.log(`${i}`);
      }
    }
}
findIndex();