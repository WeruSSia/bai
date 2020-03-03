console.log("**********7**********");

let arr = [];

const randomArray = ()=>{
    for(let i=0; i<10; i++){
    arr.push(Math.floor(Math.random()*20-5+1)+5);
    }
    return arr;
}

console.log((randomArray()));

