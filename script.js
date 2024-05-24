// string to number

let x = "123";
console.log(x, typeof x);

x = Number(x)
console.log(x, typeof x);




//number to string

let y = 123;
console.log(y, typeof y);

y = String(y);
console.log(y, typeof y);



//boolean to Number
let z1 = false;
z1 = Number(z1);
console.log(z1, typeof z1);

// numbers to boolean
let z2 =1;
z2 = Boolean(z2);
console.log(z2, typeof z2);
// 0 is only false .... other all + and - values are true


// string work as integer

let p = "45";
let m = "10";

console.log(p-m);
console.log(p*m);
console.log(p/m);
console.log(p%m);


//result of integer - boolean
let g = 12;
let d = g - true;
console.log(d);




