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
const skaiciai2 = [...Array(30)].map(_=>random(5,25));
console.log('solution 1',skaiciai);
console.log('solution 2',skaiciai2);

console.log('-----------------2a-----------------------');
// let kiekis = 0;
// skaiciai.forEach(a => a > 10 ? kiekis += 1 : null);

let kiek = skaiciai.filter(x => x === 10).length 
console.log('(a) skaiciu 10 yra =',kiek);

console.log('-----------------2b----------------------');

// console.log(Math.max(...skaiciai), skaiciai.indexOf(Math.max(...skaiciai))); kaip variantas
// const didziausias = skaiciai.reduce((a, b)=> a > b ? a : b); variantas su reduce a ir b tikrina kas yra didesnis kol ne nueis iki didziausio B
// console.log(b)
const didziausias = Math.max(...skaiciai);
const index = skaiciai.findIndex(didziausias => didziausias === Math.max(...skaiciai));
console.log('(b) indeksas yra =', index,'didziausias skaicius yra =', didziausias);

console.log('-----------------2c----------------------');
//console.log(skaiciai.filter((_, i)=> i % 2 === 0).reduce((a,b) => a + b)); reikejo indexa ieskoti kuris yra porinis
//skaiciai.map((a, i)=>i%2===0?suma+=a:null); variantas nr 2

const poriniai = skaiciai.filter(a => (a % 2)===0);
console.log("poriniai skaiciai -> ",poriniai)
console.log("(c) poriniu skaiciu suma -> ", poriniai.reduce((a, b) => a + b))

console.log('-----------------2d----------------------');

const skaiciukai = skaiciai.map((a, b) => a - b);
console.log("(d) atimant indexa -> ", skaiciukai);

console.log('-----------------2e----------------------');
// skaiciai.push(...([...Array(10)].map(_ => rand(5, 25))));
// console.log(skaiciai) or (newSkaiciai jei priskirti)
const skaiciai10 = [];
for(let i = 0; i < 10; i++){
    skaiciai10.push(random(5, 25)); 
}
const newSkaiciai = skaiciai10.concat(skaiciai)
console.log('(e) naujas masyvas su 40 reiks ->', newSkaiciai);

console.log('-----------------2f----------------------');
// const[a, b]=[skaiciai.filter((_, i)=>i % 2===0),skaiciai.filter((_,i)=>i%2!===0)];
const equalArray = [];
const oddArray = [];
newSkaiciai.forEach((elementas, indexas)=>{
   if(indexas % 2===0 ){equalArray.push(indexas)};
   if(indexas % 2!=0 ){oddArray.push(indexas)};
});

console.log('(f) Poriniai skaiciai', equalArray);
console.log('(f) Ne poriniai skiaiciai',oddArray);

console.log('-----------------2g----------------------');

let nuliukai = [...newSkaiciai];
nuliukai.map((element, index) =>{ if(element > 15 && index % 2===0){ nuliukai[index] = 0  }});
console.log('skaiciai kurie didesni uz 15 tapo 0', nuliukai)

console.log('-----------------2h----------------------');
// let saugiklis = 100;
let i = -1;
while(i < newSkaiciai.length - 1 && newSkaiciai[i++] <= 10){
    // if(!(saugiklis--))break;
    // i++;
}
console.log('variantas a',i> newSkaiciai.length - 1 ? -1 : i)

let maziausiasIndex = [];
newSkaiciai.forEach((a, i)=>{
    if(a>10){
    maziausiasIndex.push(i);
    }
});

console.log('variantas b',maziausiasIndex[0])


console.log('-----------------3----------------------');
//let x = ['A', 'B', 'C','D'];
//let raideles = [...Array(200).map(a => x[random(0, x.length - 1)]);
//let count =[]
//for (const i of raideles){
     //count[i] ? count[i] += 1: count[i] =1} console.log(count)

/*const mas = [...Array(200)].map(_=> ['A','B','C','D'][rand(0,3)]);
const rez = {A:0, B:0, C:0, D:0}
mas.foreach(l=>rez[l]++);
console.log(mas)
console.log(rez)*/

function randomString(length) {
    let result = [];
    let raides = 'ABCD';
    let ilgis = raides.length;
    for ( let i = 0; i < length; i++ ) {
      result += raides.charAt(Math.floor(Math.random() * 
 ilgis));
   }
   return result;
}

console.log(randomString(200));

let ABCD = [randomString(200)], o = []
ABCD.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
console.log(o)
console.log('-----------------4----------------------');


const arrayABC = [...new Set(o)].sort();
console.log('unikalus:', arrayABC.length, arrayABC)

console.log('-----------------5----------------------');

let array1 = [...Array(100)].map(_=>random(100,999));
let array2 = [...Array(100)].map(_=>random(100,999));
    unique = array1.filter((el, _) => array1.indexOf(el) === array1.lastIndexOf(el));
    unique2 = array2.filter((el, _) => array2.indexOf(el) === array2.lastIndexOf(el)); //galima daryti su Set kadangi set tik skaiciuoja nesikartuojancius skaicius

console.log('Nesikartuojantis unikalus skaiciai (1)',unique);
console.log('Nesikartuojantis unikalus skaiciai (2)',unique2);

/* option nr 2 */
const m1 = new Set();
let sk = 0;
//tas pats length bet set kadangi yra naujiesnis tai galima nauduoti size
while(m1.size < 100){
    sk++;
    m1.add(random(100, 999));
}
const m10 = [...m1];
while(m1.size < 100){
    sk++;
    m1.add(random(100, 999));
}
const m20 = [...m1];

console.log(sk);
console.log(m20);
console.log(m10);

// m1.add('gg');
// m1.add('gg');
// m1.add('gg2');
// m1.add('gg3');
console.log('-----------------6----------------------');
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
console.log('-----------------7----------------------');
//Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
console.log('-----------------8----------------------');
//Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
const uniarr = [];
for(let i=0; i < m10.length -1; i++){
    uniarr[m10[i]]= m20[i];
}
console.log(uniarr)