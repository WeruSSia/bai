console.log("**********2**********");

// boki trójkąta
let a = 3;
let b = 4;
let c = 5;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let countArea = (a, b, c) => {
    const halfOfPerimeter = (a + b + c) / 2;
    return Math.sqrt(halfOfPerimeter * (halfOfPerimeter - a) * (halfOfPerimeter - b) * (halfOfPerimeter - c));
};

console.log("Pole trójkąta o bokach " + a + ", " + b + " oraz " + c + " wynosi " + countArea(a, b, c));