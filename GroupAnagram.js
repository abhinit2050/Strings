https://leetcode.com/problems/group-anagrams/submissions/1743511937/

var groupAnagrams = function(strs) {
    
    let map={};

    for(let i=0;i<strs.length;i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]]
        } else {
            map[sortedStr].push(strs[i])
        }
    }

        let output = Object.values(map);
        return output
    
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));