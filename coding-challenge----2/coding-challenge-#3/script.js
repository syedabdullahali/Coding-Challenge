const tony = "95"
const tony__weight="1.88"

const stark ="85"
const stark_weight="1.76"

const tonyBMi  = tony/tony__weight **2 ;

const starkBmi = stark /(stark_weight*stark_weight);

console.log(tonyBMi,starkBmi)


if(tonyBMi>= starkBmi){
    console.log(`tony is smarter ${tony} then stark!`)
}else{
    console.log(`stark is smarter ${stark} then tony!`)
}

