function productOfNumbers(...args) {
    if(args.length === 0) return 0;
    let product = 1;
     for (let i = 0; i < args.length; i++) {
        product = product * args[i];
    }
    return product;
 }
 console.log(productOfNumbers(3,2,5));
 console.log(productOfNumbers(2,6,8,10));
 