import decodeNumber from './solution.mjs';

function test1()
{
	return decodeNumber('...') == 3;
}

function test2()
{
	return decodeNumber('.,') == 4;
}
function test3()
{
	return decodeNumber(',.') == 6;
}

function test4()
{
	return decodeNumber(',...') == 8;
}

function test5()
{
	return decodeNumber('.........!') == 107;
}

function test6()
{
	return decodeNumber('.;') == 49;
}

function test7()
{
	return decodeNumber('..,') == 5;
}

function test8()
{
	return decodeNumber('...') == 3;
}

function test9()
{
	return decodeNumber('!!!') == 300;
}
function test10()
{
	return decodeNumber(';!') == 50;
}

function test11()
{
	return isNaN(decodeNumber(';.W'));
}

function test12()
{
	return decodeNumber('..,!') == 95;
}
function test13()
{
	return decodeNumber('.;!') == 49;
}

export default function testsDay16()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
	console.log("test8 "+test8 ());
	console.log("test9 "+test9());
	console.log("test10 "+test10());
	console.log("test11 "+test11());
	console.log("test12 "+test12());
	console.log("test13 "+test13());
}
