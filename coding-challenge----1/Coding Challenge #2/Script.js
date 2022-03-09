// const calcTip = (bill)=>{
//     return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2
//    }

const calcTip = (bill)=> bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2

const bills= [500 ,555 ,100] 

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

// if we try like this 
// both will coverd in string and they will add like this '1' +'1' =11

//const Total = bills + tips 

// It's a Right way for add both array 

const Total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]] 

console.log(bills,tips,Total)




