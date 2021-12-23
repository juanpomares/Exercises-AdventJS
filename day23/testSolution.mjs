import canReconfigure from './solution.mjs';

function test1()
{
	return canReconfigure('BAL','LIB') == true;
}

function test2()
{
	return canReconfigure('CON','JUU') == false;
}

function test3()
{
	return canReconfigure('MMM','MID') == false;
}

function test4()
{
	return canReconfigure('AA','MID') == false;
}

function test5()
{
	return canReconfigure('MID','AA') == false;
}

function test6()
{
	return canReconfigure('xxxMMM','aaaDDD') == true;
}

function test7()
{
	return canReconfigure('aaaDDDmmm','aaaDDDmmm') == true;
}

function test8()
{
	return canReconfigure('xxxqqqeeefffggg','xxxqqqeeefffgg') == false;
}

function test9()
{
	return canReconfigure('abcdefghijkl','lkjihgfedcba') == true;
}




export default function testsDay23()
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
}
