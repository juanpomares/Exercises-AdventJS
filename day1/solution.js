export default function contarOvejas(ovejas) 
{
  let ovejasFilter=[];
  for(let i=0; i<ovejas.length; i++)
  {
    let ovejaActual=ovejas[i];

    if(ovejaActual.color=="rojo" 
    && ( (ovejaActual.name.indexOf("n")!=-1 || ovejaActual.name.indexOf("N")!=-1 ) && ((ovejaActual.name.indexOf("a")!=-1 || ovejaActual.name.indexOf("A")!=-1 )) ) )
      ovejasFilter.push(ovejaActual);
  }
  
  return ovejasFilter;
}
