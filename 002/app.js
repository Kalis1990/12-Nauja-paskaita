//forEach map sort filter namu darbai
//[1, 5, 77].forEach(a=>console.log(a))

[1, 5, 77].forEach(a=>{
    if(a > 4){
    console.log(a) 
    }
});
console.log('-----------------------') ;

[1, 5, 77].forEach((a, i)=>console.log(a,i));

console.log('-----------------------') ;

[1, 5, 77].forEach((a, i,t)=>console.log(t[i]));

console.log('-----------------------') ;

[1, 5, 77].forEach((a, i,t)=>console.log(t[2 - i]));

console.log('----------Map-------------') ;

const fe = [1, 5, 77].forEach(a=>console.log(a));
const map = [1, 5, 77].map((a, i) => {
   return a * i;
});
console.log(map)

console.log('----------Filter-------------') ;

const fi = [1, 0, 5, 77].filter(a => a > 4).map(r => r * 10);
console.log(fi);

console.log('----------NAMAS-------------') ;

const namas = [1, 0, 11, 5, 77]
namas.sort((a, b) => a - b) // jei parasyti b - a surusiuos atvirksciai

console.log(namas)

const namas1 = [1, 0, -11, 5, 77]
namas1.sort((a, b) => { // jei parasyti b - a surusiuos atvirksciai
    if(a > b)return -1;
    if(a < b)return 1;
});

const namas2 = ['1', '0', '-11', '5', '77']
namas2.sort((a, b) => a - b) // jei parasyti b - a surusiuos atvirksciai

console.log(namas2)

const namas4 = ['sds', 'hshddk', 'asfkkr', 'bnncA', 'take'];
namas4.sort((a, b) => { // jei parasyti b - a surusiuos atvirksciai
    if(a > b)return 1;
    if(a < b)return -1;
    return 0;
});
console.log(namas4)

const namas3 = ['sds', 'hshddk', 'asfkkr', 'bnncA', 'take'];
namas3.sort((a, b) => b.localeCompare(a));
console.log(namas3)