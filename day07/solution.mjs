export default function contains(store, product) 
{
  for(var key in store)
  {
    if(store.hasOwnProperty(key))
    {
      let value=store[key];
      if(typeof value === 'object' && !Array.isArray(value) && value !==null)
      {
        if(contains(value, product))
          return true;
      }else if(value==product)
        return true;
    }
  }
  
  return false;
}