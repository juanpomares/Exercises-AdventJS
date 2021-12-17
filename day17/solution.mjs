export default function countPackages(carriers, carrierID)
{
  for(let i=0; i<carriers.length; i++)
  {
    if(carriers[i][0]==carrierID)
    {
      let packs=carriers[i][1];

      for(let s=0; s<carriers[i][2].length; s++)
      {
        packs+=countPackages(carriers, carriers[i][2][s]);
      }

      return packs;
    }
  }
  
  return 0;
}