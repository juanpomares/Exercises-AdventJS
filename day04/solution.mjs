export default function createXmasTree(height) {

  let arbol="";

  let max_grosorRama=1+(height-1)*2;
  
  let huecosRellenosTronco="";
  
  for(let nivel=0; nivel<height; nivel++)
  {
    let grosorRama=1+nivel*2;
    let huecos=(max_grosorRama-grosorRama)/2
   
    let huecosRellenos="";
    
    for(let rep=0; rep<huecos; rep++)
      huecosRellenos+="_";
        
    if(nivel==0)
      huecosRellenosTronco=huecosRellenos;
    
    arbol+=huecosRellenos;    
    
    for(let rep=0; rep<grosorRama; rep++)
      arbol+="*";
    
    arbol+=huecosRellenos;    
    
    arbol+="\n";  
  }  
  
  for(let nivel=0; nivel<2; nivel++)
  {
    arbol+=huecosRellenosTronco;
    arbol+="#";    
    arbol+=huecosRellenosTronco;
    if(nivel==0)
      arbol+="\n";
    
  }
  
  return arbol;
} 