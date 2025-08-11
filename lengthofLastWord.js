var lengthOfLastWord = function(s) {
    let tempArray = s.split(" ");
   
    tempArray = tempArray.filter(item => (item.trim() != '')) ;
    
     console.log("unfiltered", tempArray);
    
    let result = (tempArray[tempArray.length-1]).length;

    return result;
};

let rlength = lengthOfLastWord("   fly me   to   the moon  ");

console.log(rlength);