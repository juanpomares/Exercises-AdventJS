export default function getMinJump(obstacles) 
{
  let obs=obstacles.sort();
  return getmJump(obs, 1);
}

function getmJump(ob, jump)
{
  for(let i=0; i<ob.length; i++)
    if(ob[i]%jump==0)
      return getmJump(ob, jump+1); 

  return jump;
}