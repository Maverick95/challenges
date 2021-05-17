import maxStockProfit from './maxStockProfit';

describe('maxStockProfit', () => {

  test.each([
    [ [ 1, 2, 3, 4, 5, 6], 15 ],
    [ [ 6, 5, 4, 3, 2, 1], 0 ],
    [ [1, 6, 5, 10, 8, 7], 18 ]
  ])('maxStockProfit( %o ) = %i', (input, result) => {

    expect(maxStockProfit(input)).toEqual(result);

  });

});