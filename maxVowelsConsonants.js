var maxFreqSum = function(s) {
    let map = {};

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]]++
        }
    }

    let maxVowel=0;
    let maxConsonant=0;
    let vowelsArray=['a','e','i','o','u'];

    for(let j=0; j<s.length;j++){
        if(vowelsArray.includes(s[j])){
            if(map[s[j]]>maxVowel){
                maxVowel = map[s[j]]
            }
        } else {
            if(map[s[j]]>maxConsonant){
                maxConsonant = map[s[j]]
            }
        }
    }

    return maxVowel+maxConsonant
};