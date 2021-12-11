export default function sumPairs(numbers, result) 
{
  for(let i=0; i<numbers.length; i++)
  {
    let numeroActual=numbers[i];
    let numeroBuscar=result-numeroActual;
    for(let j=i+1; j<numbers.length; j++)
    {
      if(numeroBuscar==numbers[j])
        return [numeroActual, numeroBuscar];
    }
  }
  return null;
}