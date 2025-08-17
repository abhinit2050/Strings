//problem at https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {

    let sNew=[]
    
    //get rid of the non alphanumeric characters
    for(let i=0;i<s.length;i++){
        let c = s.charCodeAt(i)
    //instead of checking ASCII codes, we can use regex - s[i].match(/[a-z0-9]/i)
        if((c>=48 && c<=57) || (c>=65 && c<=90) || (c>=97 && c<=122) ) {
           if(c>=65 && c<=90){
            //convert to lowercase if the character is uppercase
             sNew.push(s[i].toLowerCase())
             //we can also do s.toLowerCase() in the beginning to skip this check
             } else {
                sNew.push(s[i])
             }
        }
    }

    let n = sNew.length;
    let mid = Math.floor(n/2)

    //check for palindrome - loop till mid(n/2) and compare s[i] with s[n-1-i]
    for(let j=0;j<mid;j++){
        if(!(sNew[j] == sNew[n-1-j])){
            return false;
        }
    }

    return true;

};