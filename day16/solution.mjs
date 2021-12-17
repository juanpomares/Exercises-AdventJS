export default function decodeNumber(symbols) 
{
  let anteriorValor=1;
  let actualValor;
  let suma=0;

  for(let i=symbols.length-1; i>=0; i--)
  {
    let mSymbol=symbols[i];
    switch(mSymbol)
    {
      case '.':
        actualValor=1;
        break;
      case ',':
        actualValor=5;
        break;
      case ':':
        actualValor=10;
        break;
      case ';':
        actualValor=50;
        break;
      case '!':
        actualValor=100;
        break;

      default:  
        return NaN;
        
    }
    if(anteriorValor<=actualValor)
      suma+=actualValor;
    else
      suma-=actualValor;
    
    anteriorValor=actualValor;
  }
  
  return suma;
}