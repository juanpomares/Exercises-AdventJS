import canCarry from './solution.mjs';

function test1()
{
	return canCarry(4, [[2, 5, 8], [3, 6, 10]]) == false;
}

function test2()
{
	return canCarry(3, [[1, 1, 5], [2, 2, 10]]) == true;
}

function test3()
{
	return canCarry(3, [[2, 1, 5],[3, 5, 7]]) == true;
}

function test4()
{
	return canCarry(4, [[2, 3, 8],[2, 5, 7]]) == true ;
}

function test5()
{
	return canCarry(1, [[2, 3, 8]]) == false;
}

function test6()
{
	return canCarry(2, [[1, 2, 4], [2, 3, 8]]) == false;
}

export default function testsDay21()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
}
