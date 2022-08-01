function palindrome(str) {
  const strFresh = str
    .match(/[a-zA-Z0-9]/g)
    .join("")
    .toLowerCase();
  //   console.log(strFresh);
  const strRev = strFresh.split("").reverse().join("");
  //   console.log(strRev);
  return strFresh === strRev ? true : false;
}

// palindrome("eye");
// palindrome("A man, a plan, a canal. Panama");
// palindrome("0_0 (: /-\ :) 0-0");
const check = palindrome("My age is 0, 0 si ega ym.");
// console.log(check);
