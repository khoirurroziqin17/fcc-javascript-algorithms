function convertToRoman(num) {
  const objRoman = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const keys = Object.keys(objRoman).reverse();

  const numArrRev = num.toString().split("").reverse();
  const arrRev = [];

  arrRev.push(
    ...numArrRev.map((item, index) => {
      let num = item;
      for (let i = 0; i < index; i++) {
        num += "0";
      }
      return num;
    })
  );

  const arr = arrRev.reverse();
  // console.log(arr)

  const roman = arr.map((num) => {
    for (let i = 0; i < keys.length; i++) {
      if (parseInt(num) >= parseInt(keys[i])) {
        const hasil = Math.floor(parseInt(num) / parseInt(keys[i]));
        const roman = [];
        if (parseInt(num) % parseInt(keys[i]) === 0) {
          for (let j = 0; j < hasil; j++) {
            roman.push(objRoman[keys[i]]);
          }
        } else {
          let angka = parseInt(num);
          const numSplit = [];
          for (let k = 0; k < keys.length; k++) {
            if (angka >= parseInt(keys[k])) {
              numSplit.push(objRoman[keys[k]]);
              angka -= parseInt(keys[k]);
              k = 0;
            }
          }
          return numSplit.join("");
        }

        return roman.join("");
      }
    }

    return "";
  });

  // console.log(roman)

  return roman.join("");
}

convertToRoman(891);
