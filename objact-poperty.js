const student=[
    {id:21,name:"hamid"},
    {id:20,name:"riam"},
    {id:50,name:"dipjol"},
    {id:40,name:"shavnor"},
]
const result =student.map(n => n.name);
const bigest = student.filter(n=>n.id>39 );

console.log(bigest);