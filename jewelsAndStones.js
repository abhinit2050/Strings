var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0;
    stones.split("").forEach((stone)=>{
        jewels.includes(stone) ? jewelCount++ : null
    })
}