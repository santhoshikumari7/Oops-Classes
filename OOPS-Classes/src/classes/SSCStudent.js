class SSCStudent{

constructor(firstName,lastName,eng,tel,hind,math,sci,soci){
    
    console.log("Inside SSCStudent Constructor.");
    console.log(firstName,lastName,eng,tel,hind,math,sci,soci);

    this.firstName = firstName;
    this.lastName = lastName
    this.eng = eng;
    this.tel = tel;
    this.hind = hind;
    this.math = math;
    this.sci = sci;
    this.soci = soci;
}

calculateResult = ()=>{

    let passMarks = 35;

    if(
        this.eng >= passMarks &&
        this.tel >= passMarks &&
        this.hind >= passMarks &&
        this.math >= passMarks &&
        this.sci >= passMarks &&
        this.soci >= passMarks 
        
    ){
        console.log(`${this.firstName} ${this.lastName} passes in tenth`);
     
    }else {
        console.log(`${this.firstName} ${this.lastName} failed in tenth`);
    }
};

}


export default SSCStudent;