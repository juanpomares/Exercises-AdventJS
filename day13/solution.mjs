export default function wrapGifts(gifts) 
{
  if(gifts.length==0)   return "";

  let maxLength=gifts[0].length;
  let res=[];

  let wrapperLine="*".repeat(maxLength+2);

  res.push(wrapperLine);

    gifts.forEach( function(valor, indice, array)
    {
      res.push("*"+valor+"*");
    });

  res.push(wrapperLine);
  return res;
}