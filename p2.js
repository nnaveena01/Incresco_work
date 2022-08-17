var vegetables=["carrot", "tomato","cucumber","cabbage","potato"];
var colors=["orange","red",'green',"white","brown"];
function findcolor(veg)
{
    let indexveg=vegetables.findIndex(element=>element==veg);
    console.log(colors[indexveg]);
}
findcolor("tomato")

/*
	var vegetables=
{
    carrot:"orange","tomato":"red","cucumber":"green",
    cabbage:"white",potato:"brown"
};
var color=vegetables['carrot'];
console.log(color)
*/