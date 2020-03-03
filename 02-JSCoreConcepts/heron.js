// boki trójkąta
let a = 3;
let b = 4;
let c = 5;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let poleHerona = (a,b,c) => {
    let p = (a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
};

console.log("**********2**********");

console.log("Pole trójkąta o bokach "+a+", "+b+" oraz "+c+" wynosi " + poleHerona(a,b,c) );