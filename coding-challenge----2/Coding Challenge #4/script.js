let bill =40;

let tip = bill >= 50 && bill <= 300 ?bill*(15/100): bill*(20/100);


console.log((15/100))
console.log((20/100))

console.log(`The bill was ${bill},the Tip was ${tip}, and the total value ${bill + tip}`);