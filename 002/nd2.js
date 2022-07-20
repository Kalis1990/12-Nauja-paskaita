console.log('----------------1-----------------------');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const cats = [...Array(10)].map(_=>random(2,12));

console.log(cats);

// const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];
// let owners = [...Array(10)].map(_=>Math.floor(Math.random() * girls.length)); 
// console.log(owners)let rand = Math.floor(Math.random() * myArray.length);


console.log('----------------2-----------------------');
//Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log();
let sum = 0;
cats.forEach(a => sum+= a);
console.log(sum);
let sumsum = 0;
cats.forEach(a => {if(a % 3 === 0) {sumsum+= a}});
console.log(sumsum);


console.log('----------------3-----------------------');
//Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;
owners.unshift('Nauseda');
console.log([...owners])

console.log('----------------4-----------------------');
//Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats), naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'), o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();
let catOwners = owners.map((a, i, t)=>`${t[i+1]}has${cats[i]}cats`).slice(0, -1);
console.log(catOwners);

console.log('----------------5-----------------------');
//Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().
console.log(owners.find(a=>owners.indexOf(a)!==owners.lastIndexOf(a)));
