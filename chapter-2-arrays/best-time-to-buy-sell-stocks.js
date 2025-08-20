function calcBestProfitInGivenDaysAndStocks(params) {
  const daysNStocks = [2, 7, 1, 5, 3, 6, 8, 4];

  let min = daysNStocks[0];
  let profit = 0;

  for (let i = 0; i < daysNStocks.length; i++) {
    if (daysNStocks[i] < min) {
      min = daysNStocks[i];
    } else {
      if (daysNStocks[i] - min > profit) {
        profit = daysNStocks[i] - min;
        // console.log(profit, i);
      }
    }
  }

  console.log(profit);
}

calcBestProfitInGivenDaysAndStocks();
