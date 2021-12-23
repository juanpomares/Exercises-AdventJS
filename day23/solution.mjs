export default function canReconfigure(from, to)
{
  if(from.length!=to.length) return false;

  if(from!=to)
  {
    for(let index=0; index<from.length; index++)
    {
      if(from[index]!=to[index])
      {
        for(let index2=index+1; index2<from.length; index2++)
        {
          if(from[index]==from[index2] && to[index]!=to[index2])
            return false;

          if(to[index]==to[index2] && from[index]!=from[index2])
            return false;
        }
      }
    }
  }
  return true;
}
