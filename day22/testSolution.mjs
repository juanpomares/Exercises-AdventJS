import countDecorations from './solution.mjs';

function test1()
{
	return countDecorations({"value":3,"left":null,"right":null}) == 3;
}

function test2()
{
	return countDecorations({"value":7,"left":{"value":3,"left":null,"right":null},"right":null}) == 10;
}

function test3()
{
	return countDecorations({"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null}) == 15;
}

function test4()
{
	return countDecorations({"value":6,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null}}) == 36;
}

function test5()
{
	return countDecorations({"value":1,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":6,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null}}}) == 52;
}

function test6()
{
	return countDecorations({"value":1,"left":null,"right":null}) == 1;
}

function test7()
{
	return countDecorations({"value":2,"left":null,"right":null}) == 2;
}

function test8()
{
	return countDecorations({"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}) == 7;
}

function test9()
{
	return countDecorations({"value":1,"left":null,"right":null}) == 1;
}

function test10()
{
	return countDecorations({"value":2,"left":null,"right":null}) == 2;
}

function test11()
{
	return countDecorations({"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}) == 8;
}

function test12()
{
	return countDecorations({"value":1,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}},"right":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}}) == 16;
}



export default function testsDay22()
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
}
