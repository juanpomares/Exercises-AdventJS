function test1()
{
	return isValid("bici coche (balón) bici coche peluche")==true;
}

function test2()
{
	return isValid("(muñeca) consola bici")==true;
}

function test3()
{
	return isValid("bici coche (balón bici coche")==false;
}


function test4()
{
	return isValid("peluche (bici \[coche) bici coche balón")==false;
}

function test5()
{
	return isValid("(peluche {) bici")==false;
}

function test6()
{
	return isValid("() bici")==false;
}

function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
}