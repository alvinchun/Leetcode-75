//Merge Strings Alternatively

var mergeAlternately = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };




const mergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length)
  let result = ''

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? '') + (b[i] ?? '')
  }

  return result
}