export default function getCoins(change)
{
  let coins=[0,0,0,0,0,0];

  if(change>=50)
  {
    coins[5]=Math.floor(change/50);
    change-=coins[5]*50;
  }


  if(change>=20)
  {
    coins[4]=Math.floor(change/20);
    change-=coins[4]*20;
  }


  if(change>=10)
  {
    coins[3]=Math.floor(change/10);
    change-=coins[3]*10;
  }
  if(change>=5)
  {
    coins[2]=Math.floor(change/5);
    change-=coins[2]*5;
  }

  if(change>=2)
  {
    coins[1]=Math.floor(change/2);
    change-=coins[1]*2;
  }

  coins[0]=change;

  return coins;
}
