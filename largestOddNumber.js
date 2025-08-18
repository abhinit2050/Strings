var largestOddNumber = function(num) {
   
    let i = num.length-1;
   
    while(i>=0){
       
        if(num[i]%2 == 0){
            i--
        } else {
            break;
        }
    }

    if(i<0) {return ""}

    return num.slice(0,i+1);

};

let str = "52754"
console.log(largestOddNumber(str));