console.log('----------------1-----------------------');
//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const pinigine = [];
// for(let i = 0; i <= random(10, 30); i++){
// pinigine.push(random(0, 10)); 
// }
const pinigine = [...Array(random(10, 30))].map(_=>random(0, 10));
console.log('solution 1',pinigine);

console.log('----------------2-----------------------');
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
// let suma = 0;
// for (let i = 0; i < pinigine.length; i++) {
//     suma += pinigine[i];
//     console.log(suma);
// }
let suma = pinigine.reduce((a, b) => a + b);
console.log('suma pinigeliu yra', suma)

console.log('----------------3-----------------------');
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
const daugiauUZ2 = pinigine.filter(a => (a > 2));
console.log("Pinigai didesnem nei 2eu kupiurom-> ",daugiauUZ2)
console.log("Pinigu suma", daugiauUZ2.reduce((a, b) => a + b))

console.log('----------------4-----------------------');
//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

let metaliukaiNuliukai = [...pinigine];
metaliukaiNuliukai.map((element, index) =>{ if(element <= 2){ metaliukaiNuliukai[index] = 0  }});
console.log('Isleidom mazesnes ir lygus 2 kupiuras', metaliukaiNuliukai)