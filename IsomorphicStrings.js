var isIsomorphic = function(s, t) {
    var obj = {};

    for(let i=0;i<s.length;i++){
       
        if(!obj.hasOwnProperty(s[i]) && !Object.values(obj).includes(t[i])){
            obj[s[i]] = t[i]
        } else if(obj[s[i]] != t[i] ){
            return false
        }
    }

    return true;
};

let s="paper";
let t="title";

console.log(isIsomorphic(s,t));
