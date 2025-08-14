//using native JS array methods
// var numJewelsInStones = function(jewels, stones) {
//     let jewelCount = 0;
//     stones.split("").forEach((stone)=>{
//         jewels.includes(stone) ? jewelCount++ : null
//     })
// }

//using Set data structure to better the time complexity
var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0;
    let jSet = new Set();

    for(let i=0;i<jewels.length;i++){
        jSet.add(jewels[i])
    } 

    for(let j=0; j<stones.length;j++){
        if(jSet.has(stones[j])){
            jewelCount++
        }
    }
   

    return jewelCount;

};