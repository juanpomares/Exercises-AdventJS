export default function missingReindeer(ids) 
{
  let i=0, total=ids.length;
  let sumTotal=0, sumActual=0;

  while(i<total)
  {
    sumActual+=ids[i++];
    sumTotal+=i;
  }
  
  return sumTotal-sumActual;
}