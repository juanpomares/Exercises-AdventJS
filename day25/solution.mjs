export default function canMouseEat(direction, game)
{
  let mousePosition=null;

  for(let i=0; i<game.length && mousePosition==null; i++)
  {
     for(let j=0; j<game[i].length; j++)
    {
      if(game[i][j]=='m')
        mousePosition=[i,j];
    }
  }

  if(mousePosition==null) return false;

  let newPosition=[...mousePosition];

  switch(direction)
  {
    case 'up':
      newPosition[0]--;
      break;
    case 'down':
      newPosition[0]++;
      break;
    case 'left':
      newPosition[1]--;
      break;
    case 'right':
      newPosition[1]++;
      break;
  }

  if(newPosition[0]==-1 || newPosition[1]==-1) return false;
  if(game.length<=newPosition[0]) return false;
  if(game[newPosition[0]][newPosition[1]]===undefined) return false;

  return game[newPosition[0]][newPosition[1]]=='*';
}
