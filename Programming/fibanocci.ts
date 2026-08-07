function fibonacci() {

    let a = 0, 
    b = 1, 
    temp;

    for (let i = 0; i < 10; i++) {
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
}
fibonacci();

