var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false;
    }

    let sObj ={}
    let tObj={}


    for(let i=0; i<s.length;i++){
        if(!(sObj.hasOwnProperty(s[i]))){
            sObj[s[i]] = 1
        } else {
            sObj[s[i]]++
        }
    }

    for(let j=0; j<t.length;j++){
        if(!(tObj.hasOwnProperty(t[j]))){
            tObj[t[j]] = 1
        } else {
            tObj[t[j]]++
        }
    }


    for (const key of Object.keys(sObj)){
      
            if(!tObj[key] || (sObj[key] != tObj[key])){
                return false
            }
    }

    return true
    
};

let s = "car";
let t = "rat"

console.log(isAnagram(s,t));