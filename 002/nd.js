console.log('----------------1-----------------------');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const skaiciai = [];
for(let i = 0; i <= 29; i++){
skaiciai.push(random(5, 25)); 
}
console.log(skaiciai);

console.log('-----------------2a-----------------------');

let kiek = skaiciai.filter(x => x === 10).length 
console.log('(a) skaiciu 10 yra =',kiek);

console.log('-----------------2b----------------------');

const didziausias = Math.max(...skaiciai);
const index = skaiciai.findIndex(didziausias => didziausias === Math.max(...skaiciai));
console.log('(b) indeksas yra =', index,'didziausias skaicius yra =', didziausias);

console.log('-----------------2c----------------------');

const poriniai = skaiciai.filter(a => (a % 2)===0);
console.log("poriniai skaiciai -> ",poriniai)
console.log("(c) poriniu skaiciu suma -> ", poriniai.reduce((a, b) => a + b))

console.log('-----------------2d----------------------');

const skaiciukai = skaiciai.map((a, b) => a - b);
console.log("(d) atimant indexa -> ", skaiciukai);

console.log('-----------------2e----------------------');

const newSkaiciai = [];
for(let i = 0; i < 10; i++){
newSkaiciai.push(random(5, 25)); 
}
console.log('(e) naujas masyvas su 40 reiks ->', newSkaiciai.concat(skaiciai));

console.log('-----------------2f----------------------');

const equalArray = [];
const oddArray = [];
newSkaiciai.forEach((elementas, indexas)=>{
   if(indexas % 2===0 ){equalArray.push()};
   if(indexas % 2!=0 ){oddArray.push()};
});

console.log(equalArray);

