
export default function isValid(letter) 
{ 
	let aperturaParentesis=false, contadorCaracteres=0;

	for(let i=0; i<letter.length; i++)
	{
		switch(letter[i])
		{
		 case "(":
		  if(aperturaParentesis==true)
			return false;
		  else 
		  {
			aperturaParentesis=true;
			contadorCaracteres=0;
		  } 
		  break;

		  case ")":
		  if(aperturaParentesis==true)
		  {
			  aperturaParentesis=false;
			  if(contadorCaracteres==0)
				return false;
		  }else 
			return false;
		  
		  break;

		  case "{":
		  case "}":
		  case "[":
		  case "]":
			return false;

			default:
			if(aperturaParentesis)
			  contadorCaracteres++;
		}
	}

	if(aperturaParentesis==true) return false;

	return true;
}