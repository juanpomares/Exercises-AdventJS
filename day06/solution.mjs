export default function sumPairs(numbers, result) 
{
  let initialArrayObject={FirstNumber: -1, SecondNumber: -1, result: result};

  let objectResult=numbers.reduce((arrayObject,currentNumber, currentIndex, theArray) => 
  {
    if(arrayObject.FirstNumber==-1)
    {
      let numberFind=arrayObject.result-currentNumber;
      if(theArray.indexOf(numberFind, currentIndex+1)!=-1)
      {
        arrayObject.FirstNumber=currentNumber;
        arrayObject.SecondNumber=numberFind;
      }
    }
    return arrayObject;
  }, initialArrayObject);

  if(objectResult.FirstNumber!=-1)
    return [objectResult.FirstNumber, objectResult.SecondNumber];
  else 
    return null;
}