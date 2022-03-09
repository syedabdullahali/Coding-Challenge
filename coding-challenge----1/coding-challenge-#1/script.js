/*const CalcAverage1 = (a, b, c)=> {
    return (a + b + c) / 3
}*/

const CalcAverage = (a,b,c) =>(a+b+c)/3

console.log(CalcAverage( 3,4,5))

let scoreDolphins = CalcAverage(44,23,71)// here will be 46 

let scoreKoalas = CalcAverage(65,54,49)// here will be 56

console.log(scoreKoalas,scoreDolphins)


const CheckWinner = function(avgDolphins ,avgKoalas){
  if (avgDolphins >= 2 * avgKoalas){
       console.log(`Dolphins Win🏆( ${avgDolphins}) vs ${avgKoalas}`)
  } else if(avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas Win🏆( ${avgKoalas} vs ${avgDolphins})`)
  }else{
      console.log(`no team wins....${avgDolphins}or ${avgKoalas}`)
      
  } 
}


CheckWinner(scoreDolphins,scoreKoalas)
CheckWinner(576,1400)


 scoreDolphins = CalcAverage(85,54,41)// here will be 46 
 
 scoreKoalas = CalcAverage(23,34,27)// here will be 56

console.log(scoreKoalas,scoreDolphins)