const number=[12,21,345,4,2];
const output=[];
for(let i=0; i<number.length; i++){
    const elment=number[i];
    const result=elment * elment;
    output.push(result);
}

const result=number.map(function(elment){
    return elment * elment;
})
const result=number.map( x=> x*x);
const result = number.filter(x => x<8);
console.log(result);