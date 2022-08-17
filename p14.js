function journeyDistance(n)
{
   let count=0
   if(n>=3)
   {
       n-=3;
       count++;
       count=count+n/2;
       return count;
   }
   else
       return 0;
}
console.log(journeyDistance(3));
