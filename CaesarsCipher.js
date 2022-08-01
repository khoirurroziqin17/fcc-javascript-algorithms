function rot13(str) {
  const arr = str.split("");
  const newArr = arr.map((item) => {
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 77) {
      const code = item.charCodeAt();
      return String.fromCharCode(code + 13);
    } else if (item.charCodeAt() >= 78 && item.charCodeAt() <= 90) {
      const code = item.charCodeAt();
      return String.fromCharCode(code - 13);
    } else {
      return item;
    }
  });

  return newArr.join("");
}

rot13("SERR PBQR PNZC");
