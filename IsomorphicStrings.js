
// var isIsomorphic = function(s, t) {
//     var obj = {};

//     for(let i=0;i<s.length;i++){
       
//         if(!obj.hasOwnProperty(s[i]) && !Object.values(obj).includes(t[i])){
//             obj[s[i]] = t[i]
//         } else if(obj[s[i]] != t[i] ){
//             return false
//         }
//     }

//     return true;
// };


//alternate approach
var isIsomorphic = function(s,t){
    let map1={};
    let map2={};

    for(let i=0;i<s.length;i++){
        if(!map1[s[i]] && !map2[t[i]]){
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];  
        } else if(map2[t[i]] != s[i]){
            return false;
        } else if(map1[s[i]] != t[i]){
            return false;
        }
    }
    return true;
}

let s="paper";
let t="title";

console.log(isIsomorphic(s,t));
