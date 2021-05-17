const maxStockProfit: (prices: number[]) => number = (prices) => {

  const length = prices.length;
  const pricesMaxSell = new Array(length);
  const pricesReverse = Array.from(prices).reverse();

  let priceLargestReverse = 0;

  pricesReverse.forEach((value, index) => {
    pricesMaxSell[length - 1 - index] = priceLargestReverse;
    if (value > priceLargestReverse) {
      priceLargestReverse = value;
    }
  });

  let stockInHand = 0;
  let profit = 0;

  prices.forEach((value, index) => {

    if (pricesMaxSell[index] > value) {
      stockInHand++;
      profit -= value;
    }

    if (pricesMaxSell[index] < value && stockInHand) {
      profit += stockInHand * value;
      stockInHand = 0;
    }

  });

  return profit;

};

export default maxStockProfit;

