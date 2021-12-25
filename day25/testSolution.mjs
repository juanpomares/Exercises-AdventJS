import canMouseEat from './solution.mjs';

function test1()
{
	return canMouseEat('up', [[" "," "," "],[" "," ","m"],[" "," ","*"]])==false;
}

function test2()
{
	return canMouseEat('down', [[" "," "," "],[" "," ","m"],[" "," ","*"]])==true;
}

function test3()
{
	return canMouseEat('right', [[" "," "," "],[" "," ","m"],[" "," ","*"]])==false;
}

function test4()
{
	return canMouseEat('left', [[" "," "," "],[" "," ","m"],[" "," ","*"]])==false;
}

function test5()
{
	return canMouseEat('up', [["*"," "," "," "],[" ","m","*"," "],[" "," "," "," "],[" "," "," ","*"]])==false;
}

function test6()
{
	return canMouseEat('down', [["*"," "," "," "],[" ","m","*"," "],[" "," "," "," "],[" "," "," ","*"]])==false;
}

function test7()
{
	return canMouseEat('right', [["*"," "," "," "],[" ","m","*"," "],[" "," "," "," "],[" "," "," ","*"]])==true;
}

function test8()
{
	return canMouseEat('left', [["*"," "," "," "],[" ","m","*"," "],[" "," "," "," "],[" "," "," ","*"]])==false;
}

function test9()
{
	return canMouseEat('up', [["*","m"]])==false;
}

function test10()
{
	return canMouseEat('down', [["*","m"]])==false;
}

function test11()
{
	return canMouseEat('right', [["*","m"]])==false;
}

function test12()
{
	return canMouseEat('left', [["*","m"]])==true;
}

function test13()
{
	return canMouseEat('up', [["*","*","*"],["*","m","*"],["*","*","*"]])==true;
}

function test14()
{
	return canMouseEat('down', [["*","*","*"],["*","m","*"],["*","*","*"]])==true;
}

function test15()
{
	return canMouseEat('right', [["*","*","*"],["*","m","*"],["*","*","*"]])==true;
}

function test16()
{
	return canMouseEat('left', [["*","*","*"],["*","m","*"],["*","*","*"]])==true;
}

function test17()
{
	return canMouseEat('up', [[" "," "," "],[" ","m"," "],[" "," "," "]])==false;
}

function test18()
{
	return canMouseEat('down', [[" "," "," "],[" ","m"," "],[" "," "," "]])==false;
}

function test19()
{
	return canMouseEat('right', [[" "," "," "],[" ","m"," "],[" "," "," "]])==false;
}

function test20()
{
	return canMouseEat('left', [[" "," "," "],[" ","m"," "],[" "," "," "]])==false;
}



export default function testsDay25()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
	console.log("test8 "+test8());
	console.log("test9 "+test9());
	console.log("test10 "+test10());
	console.log("test11 "+test11());
	console.log("test12 "+test12());
	console.log("test13 "+test13());
	console.log("test14 "+test14());
	console.log("test15 "+test15());
	console.log("test16 "+test16());
	console.log("test17 "+test17());
	console.log("test18 "+test18());
	console.log("test19 "+test19());
	console.log("test20 "+test20());
}
