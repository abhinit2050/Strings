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

    // for(let j=0; j<s.length;j++){
    //     if(vowelsArray.includes(s[j])){
    //         if(map[s[j]]>maxVowel){
    //             maxVowel = map[s[j]]
    //         }
    //     } else {
    //         if(map[s[j]]>maxConsonant){
    //             maxConsonant = map[s[j]]
    //         }
    //     }
    // }

    //iterating just over the map object => lesser number of iterations
    for(let j=0; j<mapKeys.length;j++){
        if(vowelsArray.includes(mapKeys[j])){
            if(map[mapKeys[j]]>maxVowel){
                maxVowel = map[mapKeys[j]]
            }
        } else {
            if(map[mapKeys[j]]>maxConsonant){
                maxConsonant = map[mapKeys[j]]
            }
        }
    }

    return maxVowel+maxConsonant
};