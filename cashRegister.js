function checkCashRegister(price, cash, cid) {
  const cidRev = cid.reverse();

  const currency = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  const status = {
    open: "OPEN",
    closed: "CLOSED",
    less: "INSUFFICIENT_FUNDS",
  };

  let change = cash - price;
  let changeArr = [];

  let sumCid = 0;
  cidRev.map((arr) => (sumCid += arr[1]));

  cidRev.map((arr) => {
    if (currency[arr[0]] <= change) {
      if (arr[1] >= change) {
        let loop = 0;
        while (currency[arr[0]] <= change) {
          change = Math.round((change - currency[arr[0]]) * 100) / 100;
          loop++;
        }
        sumCid -= currency[arr[0]] * loop;
        arr[1] -= currency[arr[0]] * loop;
        changeArr.push([arr[0], currency[arr[0]] * loop]);
      } else if (arr[1] === 0) {
        return false;
      } else if (arr[1] < change) {
        if (sumCid < change) return false;
        change = Math.round((change - arr[1]) * 100) / 100;
        changeArr.push([...arr]);
        arr[1] -= currency[arr[0]];
      }
    }
  });

  return change > 0
    ? { status: status.less, change: [] }
    : sumCid > 0
    ? { status: status.open, change: changeArr }
    : sumCid === 0
    ? {
        status: status.closed,
        change: cid
          .map((arr) => {
            for (let i in changeArr) {
              if (arr[0] == changeArr[i][0]) return (arr = changeArr[i]);
            }
            return arr;
          })
          .reverse(),
      }
    : "";
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
