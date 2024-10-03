"use strict";
function getCount(str) {
    str = str.toLowerCase();
    var count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let char of str) {
        if (vowels.includes(char))
            count++;
    }
    return count;
}
let vowels = getCount("abobora");
console.log(vowels);
function countVowels() {
    var _a;
    let palavra = (_a = document.getElementById("input")) === null || _a === void 0 ? void 0 : _a.value;
    let result = document.getElementById("result");
    let vowelCount = getCount(palavra);
    result.textContent = `A palavra "${palavra}" tem ${vowelCount} vogais.`;
}
//# sourceMappingURL=countvowels.js.map