export default function groupBy(collection, it)
{
  let res={};

    for(let i=0; i<collection.length; i++)
    {
      let actual=collection[i];
      let clave;
      if(typeof it === "function")
        clave=it(collection[i]);
      else
        clave=collection[i][it];

      if(!res.hasOwnProperty(clave))
      {
        res[clave]=[actual];
      }else
         res[clave].push(actual);
    }

  return res;
}
