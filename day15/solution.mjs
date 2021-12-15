export default function checkSledJump(heights)
{
  let anterior=heights[0];
  let subiendo=true;
  let cambiadoSubiendo=false;

  for(let i=1; i<heights.length; i++)
  {
    if(subiendo)
    {
      if(anterior>=heights[i])
      {
        if(!cambiadoSubiendo){ cambiadoSubiendo=true; subiendo=false;}
        else return false;
      }
    }else if(anterior<=heights[i]) return false;

    anterior=heights[i];
  }

  return cambiadoSubiendo;
}
