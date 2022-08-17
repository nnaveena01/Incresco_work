function getHashTags(str){
    let strArr=str
    .toLowerCase()
    .replace(/[^a-z]/gi," ")
    .split(" ")
    .sort((a,b)=>b.length- a.length)
    .map((word)=> "#"+word);
 return strArr.splice(0,3);
 }
 console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
 