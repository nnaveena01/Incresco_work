function fizzBuzz(start,end)
{
   let count=0;
   let arr=[]
   for(let i=start;i<=end;i++)
   {
       if(i%3==0 && i%5==0)
           arr[count++]="FizzBuzz";
       else if(i%3==0)
           arr[count++]="Fizz";
       else if(i%5==0)
           arr[count++]="Buzz";
       else   
           arr[count++]=i;
   }
   console.log(arr);
}
fizzBuzz(1,15);
