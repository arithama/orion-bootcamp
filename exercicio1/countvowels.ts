function getCount(str: string) {
  str = str.toLowerCase();
  var count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

let vowels = getCount("abobora");
console.log(vowels);

function countVowels() {
  let palavra = (<HTMLInputElement>document.getElementById("input"))?.value;
  let result = <HTMLElement>document.getElementById("result");

  let vowelCount = getCount(palavra);
  result.textContent = `A palavra "${palavra}" tem ${vowelCount} vogais.`;
}
