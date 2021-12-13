
export default function listGifts(letter) {
 
  let objects={};

  let trozos=letter.split(" ");

  for(let i=0; i<trozos.length; i++)
  {
    let letterActual=trozos[i];
    if(letterActual.length>=1 && letterActual.indexOf("_")!=0)
    {
      if(objects[letterActual]===undefined)
        objects[letterActual]=1;
      else
        objects[letterActual]++;
    }

  }

 return objects;
}
