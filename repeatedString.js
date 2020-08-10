function repeatedString(s, n) {
  /**given an infinite string find the about of repeating
    *'a's in the first n characters
     input: "abcac" 6
     output: 3
     find out the amount of times the full string occurs in the n times
     find the occurrances of a in the regular string
     times the occurances of a by the n letters divided by the regular string length
     find the cut off or tail part of the string that didn't fit evenly 
     loop through and check if the tail has any occurences of a 
    **/
  let totalAs = 0;

  if (n >= s.length) {
    const occuranceOfAs = s.split('a').length - 1;

    totalAs = Math.floor(n / s.length) * occuranceOfAs;
  }

  let tail = n % s.length;

  for (let i = 0; i < tail; i++) {
    if (s[i] === 'a') {
      totalAs++;
    }
  }

  return totalAs;
}
