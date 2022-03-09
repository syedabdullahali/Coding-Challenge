//cslcTip(bills[j]) Value will add in pairametar bill 
// acording to return statement and trineary oprator 
// our array will difind and which one will be greater than 50 they multiply by 1.5
// which one is  greater than 300 they will multiply by 2.0


const cslcTip = function(bill){
  return bill>= 50 && bill<=300 ? bill * 0.15: bill * 0.2;
}


const bills =[22,295,176,440,37,105,10,1100,86,52]

const tips =[]
const total = [];


for(let j= 0; j<bills.length; j++){ 
    // here every one array value will fillter that is  define by calcTip
    // and tip variable will store the value of cslcTip(bills[j]);

  const tip = cslcTip(bills[j]);

   console.log(bills[j])// waht is bills[j] 

  tips.push(tip) // here we tip value push in tips variable 
  
  total.push(tip + bills[j]);// here we tip value puch with bills value push(tip + bills[j])
}

console.log(bills,tips,total)
// creting a loop

let sum = 0;

const calcAverage = function(arr){ // here we did use here function expraison for add  value in variable                                       
for(let i =0; i<arr.length; i++){ 
    // sum = sum + arr[i];
    sum += arr[i];
}
return sum/arr.length 
}

console.log(calcAverage([2,3,7]))
console.log(calcAverage(total))
console.log(calcAverage(tips))





const step1 =["jazz",'blues']
console.log(step1)
step1.push("Rock-n-Roll")
console.log(step1)
step1[1]="Classics"
console.log(step1)
step1.shift()
console.log(step1)
step1.unshift(" Rap, Reggae")
console.log(step1)



for(let year = 400; year<=2000; year+=400  ){
  console.log(`leap only ${year}`)
}


let year = 2000
while(year<=2000){
 console.log(`leap only ${year}`)
 year+=400
}


