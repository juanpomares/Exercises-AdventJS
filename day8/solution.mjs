export default function maxProfit(prices)
{
  let maxP=-1;
  let minPrice=prices[0];


  for(let i=1; i<prices.length; i++)
  {
    if(prices[i]<=minPrice)
    {
      minPrice=prices[i];
    }else
    {
      let auxProfit=prices[i]-minPrice;
      if(maxP<auxProfit)
        maxP=auxProfit;
    }
  }

  return maxP;
}
