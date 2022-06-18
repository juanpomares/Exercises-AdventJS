export default function maxProfit(prices)
{
  let initialObject={maxProfit: -1, minPrice: -1};

  let theResultObject=prices.reduce((resultObject, currentPrice, currentIndex, theArray)=>
  {
    if(currentPrice<=resultObject.minPrice || resultObject.minPrice==-1)
      resultObject.minPrice=currentPrice;
    else
    {
      let currentProfit=currentPrice-resultObject.minPrice;
      if(resultObject.maxProfit<currentProfit)
        resultObject.maxProfit=currentProfit;
    }

    return resultObject;
  }, initialObject);

  return theResultObject.maxProfit;
}
