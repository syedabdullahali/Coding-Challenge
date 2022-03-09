const Mark = {
   fullName:'Mark Miller',
   mass: 78,
   height:1.69,
   calcBMI: function(){
    //    return this.mass /this.height ** 2;
    this.bmi = this.mass /this.height ** 2;
    return this.bmi;
   }
}

const jhon = {
    fullName:'jhon Smith',
    mass: 92,
    height:1.95,
    calcBMI: function(){
        //    return this.mass /this.height ** 2;
        this.bmi = this.mass /this.height ** 2;
        return this.bmi;
       }
 }
 




console.log(Mark.calcBMI())
// and we will see Bmi dta is add in mark object or not 
console.log(Mark.bmi)

console.log(jhon.calcBMI())
// also here we will see  Bmi data is add in jon object or not 
console.log(jhon.bmi)

// here we will loge both 
console.log(Mark.bmi,jhon.bmi)


if(Mark.bmi>=jhon.bmi){
 console.log(`${Mark.fullName} bmi ${Mark.bmi} is greater than
 ${jhon.fullName} bmi ${jhon.bmi} `)
}else if(jhon.bmi>=Mark.bmi){
    console.log(`${jhon.fullName} bmi ${jhon.bmi} is greater than
    ${Mark.fullName} bmi ${Mark.bmi} `)
}

