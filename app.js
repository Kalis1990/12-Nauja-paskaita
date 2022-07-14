console.log("cia");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const mas = [];
// mas[0] = 'Petras';
// mas[1] = 'Ieva';
// mas[10] = 'Bebras';
// mas[0] = 'Petras';
// mas[1] = 'Ieva';
// mas.push('Bebras');
// mas.unshift('Kurmis');
for(let i = 0; i < 10; i++){
    // mas[i] = rand(7, 77);
    mas.push(rand(7, 77)); 
}
console.log(mas);


const cats = ['Murka', 'Pilkis', 'Rainius'];
for(let i = 0; i < cats.length; i++){
    // mas[i] = rand(7, 77);
}
console.log(cats[rand(0, 2)]);
// const mas = [...Array(10)].map(_ => rand(7, 77));

const namas = [];
// // for(let i = 0; i < 10; i++){
// // console.log(mas[i]);
// // }
console.log(namas);
namas.forEach(n => console.log(n))

// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()

const a = [];
const b = [];
a.push(rand(0, 4)); 
b.push(rand(0, 4)); 
let max = Math.max(a);
let min = Math.min(b);
let result = max/min;

console.log(result);

// Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.

const skaiciai = [];
for(let i = 0; i < 3; i++){
skaiciai.push(rand(0, 25)); 
}
const vidurkis = skaiciai.reduce((a, b) => a + b) / skaiciai.length;
console.log(skaiciai);
console.log(vidurkis);

//Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 

const aa = rand(1, 10);
const bb = rand(1, 10);
const cc = rand(1, 10);
if (aa + bb <= cc || aa + cc <= bb || bb + cc <= aa){
    console.log(aa, bb, cc, 'ne trikampis');}
    else{
        console.log(aa, bb, cc, 'trikampis')}

/*Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()*/

const amounts = {};
const howmany = [];
for(let i = 0; i < 4; i++){
    howmany.push(rand(0, 2)); 
    }
console.log(howmany)
howmany.forEach(function (x) { amounts[x] = (amounts[x] || 0) + 1; });
console.log(amounts)

/*Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius */

// const n5 = [];
// const array = '';
// for(let i = 0; i < 3; i++){
// n5.push(rand(-10, 10)); 
// for(let j = 0; j < n5.length; i++){
//     if (n5[j] >= 0){
//     array+=`+${n5[j]}+}`
// }}}
// console.log(array);

/*Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000. */

const kiekis = rand(5, 3000);
const kaina = kiekis*1;
let newKaina = 0;
if((kiekis*kaina) >= 1000 && (kiekis*kaina) < 2000){
 newKaina=kaina*0.97;
}else if((kiekis*kaina) >= 2000){
    newKaina=kaina*0.96;
}
console.log('kaina',kaina)
console.log("kaina su nuolaida",newKaina)