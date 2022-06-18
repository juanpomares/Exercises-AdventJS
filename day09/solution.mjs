export default function groupBy(collection, it)
{
  let result=collection.reduce((objectResult, currentObject)=>
  {
    let key="";
    if(typeof it === "function")
      key=it(currentObject);
    else
      key=currentObject[it];

    if(!objectResult.hasOwnProperty(key))
    {
      objectResult[key]=[currentObject];
    }else
      objectResult[key].push(currentObject);

    return objectResult;
  }, {});
  return result;
}
