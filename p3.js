let s=[5,4,6,7,3]
function max(k)
{
    let m=k.reduce((a,b)=>{return Math.max(a,b);});
    if(toString.call(k)!=="[object Array]")
        return false;
    return Math.max.apply(null,k);
}
console.log(max(s));
