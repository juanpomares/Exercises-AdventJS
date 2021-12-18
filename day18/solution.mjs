export default function fixFiles(files) 
{
  let auxFiles=[], result=[];

  for(let index in files)
  {
    let fileName=files[index];

    if(auxFiles[fileName]===undefined)
    {
      auxFiles[fileName]=0;
      result.push(fileName);
    }else
		result.push(fileName+"("+auxFiles[fileName]+")");
      
    auxFiles[fileName]++;
  }

  return result;
}