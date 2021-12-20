export default function pangram(letter)
{
  let lettersIncludes=new Array(27).fill(0);
  let letterMinus=letter.toLowerCase();
  for(let index in letterMinus)
  {
    let CurrentLetter=letterMinus[index];
    switch(CurrentLetter)
    {
      case 'a':
      case 'à':
      case 'á':
      case 'ä':
      case 'â':
        CurrentLetter='a'; break;

      case 'e':
      case 'è':
      case 'é':
      case 'ë':
      case 'ê':
        CurrentLetter='e'; break;

      case 'i':
      case 'ì':
      case 'í':
      case 'ï':
      case 'î':
        CurrentLetter='i'; break;

      case 'o':
      case 'ò':
      case 'ó':
      case 'ö':
      case 'ô':
        CurrentLetter='o'; break;

      case 'u':
      case 'ù':
      case 'ú':
      case 'ü':
      case 'û':
        CurrentLetter='u'; break;
      case 'ñ':
        lettersIncludes[26]++;
        continue;
    }

    let indexLetters=CurrentLetter.charCodeAt(0)-'a'.charCodeAt(0);
    if(indexLetters>=0 && indexLetters<27)
        lettersIncludes[indexLetters]++;
  }

  for(let index in lettersIncludes)
  {
    if(lettersIncludes[index]==0)
      return false;
  }

  return true;
}
