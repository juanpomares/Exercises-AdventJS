
export default function listGifts(letter)
{
  let words=letter.split(" ");
  let counterWords=words.reduce((resultObject, currentWord) => 
  {
    if(currentWord.length>=1 && currentWord.indexOf("_")!=0)
    {
      resultObject[currentWord]??=0;
      resultObject[currentWord]++;
    }
    return resultObject;
  }, {});

  return counterWords;
}
