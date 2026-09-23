class encapsul{

    private name = 'kannan';

setName(name:string){
        this.name = name;
    }

 getName(){
       return this.name;
    }
}
 class encap2{

   callNamee(name:string){
      const yes = new encapsul();
      yes.setName(name);
      console.log(yes.getName());
   }
 }
