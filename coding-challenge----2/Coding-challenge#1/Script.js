// Data 1 
const Dolphines_equal_Score =(96 + 108 +89)
const Koalas_equal_Score = (88 + 91+110)

console.log(Dolphines_equal_Score,Koalas_equal_Score)

const Dolphines_Score =( 96 + 108 +89)/3;
const Koalas_Score =(88 + 91+110)/3
console.log(Dolphines_Score,Koalas_Score)

if(Dolphines_Score >Koalas_Score){
console.log("Dolphins win the  trophy🐬🏆")
}else if(Koalas_Score>Dolphines_Score){
    console.log("Kolas win the Trophy 🐨🏆")
}else if(Koalas_Score = Dolphines_Score){
    console.log("Both win the Trophy 🐨🏆🐬")
}

// Data bonus 
// here in this case we need to ensure that dolphine has 100 score or more than 100
// so will use here like this statement  && Dolphines_Score1 >= 100

const Dolphines_Score1 =( 97 + 112 +101)/3;
const Koalas_Score1 =(109 + 95 +106)/3
console.log(Dolphines_Score1,Koalas_Score1)

if(Dolphines_Score1 > Koalas_Score1 && Dolphines_Score1 >= 100){
console.log("Dolphins win the  trophy🐬🏆")
}else if(Koalas_Score1>Dolphines_Score1 && Koalas_Score1 >= 100){
    console.log("Kolas win the Trophy 🐨🏆")
}else if(Koalas_Score1 == Dolphines_Score1 && Dolphines_Score1 >= 100 && Koalas_Score1 >= 100 ) {
    console.log("Both win the Trophy 🐨🏆🐬")
}else{
    console.log("No one wins the Trophy 🐨🏆🐬 😞")
}