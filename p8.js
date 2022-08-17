let car = {name:"Audi", model:"X400",color:"white"}
function properties(a)
{
for(let prop in a){
  console.log(prop);
}
}
properties(car);

