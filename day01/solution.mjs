export default function contarOvejas(ovejas) 
{
  let newSheeps=ovejas.filter( (currentSheep) =>
  currentSheep.color=="rojo" 
    &&  ( (currentSheep.name.indexOf("n")!=-1 || currentSheep.name.indexOf("N")!=-1 ) 
    && ((currentSheep.name.indexOf("a")!=-1 || currentSheep.name.indexOf("A")!=-1 )) ) );
    
  return newSheeps;
}
