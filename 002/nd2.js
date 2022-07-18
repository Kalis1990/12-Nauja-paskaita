console.log('----------------1-----------------------');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const cats = [];
for(let i = 0; i < 10; i++){
    cats.push(random(2, 12)); 
}
console.log(cats);

console.log('----------------2-----------------------');

let catsLength = reduce(length);
// let newCAT = 0;
// if(catsLength % 3 == 0){

    
// }
console.log(catsLength);
