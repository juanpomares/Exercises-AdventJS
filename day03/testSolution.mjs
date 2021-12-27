import isValid from './solution.mjs';


function test1()
{
	return isValid('bici coche (balón) bici coche peluche')==true;
}

function test2()
{
	return isValid('bici coche (balón) bici coche peluche')==true;
}

function test3()
{
	return isValid('(muñeca) consola bici')==true;
}

function test4()
{
	return isValid('bici (balón bici coche')==false;
}

function test5()
{
	return isValid('peluche (bici [coche) bici coche balón')==false;
}

function test6()
{
	return isValid('(peluche {) bici')==false;
}

function test7()
{
	return isValid('() bici')==false;
}

function test8()
{
	return isValid('(()) bici')==false;
}

function test9()
{
	return isValid('(a() bici (a)')==false;
}

function test10()
{
	return isValid('(a) (b) (c)')==true;
}

function test11()
{
	return isValid('a (b) (ca) d')==true;
}

function test12()
{
	return isValid(')bici( casa play')==false;
}

export default function testsDay3()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test1());
	console.log("test8 "+test2());
	console.log("test9 "+test3());
	console.log("test10 "+test4());
	console.log("test11 "+test5());
	console.log("test12 "+test6());
}
