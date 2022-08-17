function getlength(a) { let count = 0; 
    for (const value of a) { 
    if (Array.isArray(value)) {        
		count += getlength(value); } 
    else { 
        count++; } 
		} 
    return count;
 }
 console.log(getlength([1,[2,3]]))

