import checkSledJump from './solution.mjs';

function test1()
{
	return checkSledJump([1, 2, 3, 2, 1]) == true;
}

function test2()
{
	return checkSledJump([0, 1, 0]) ==  true;
}
function test3()
{
	return checkSledJump([0, 3, 2, 1]) == true;
}

function test4()
{
	return checkSledJump([0, 1000, 1]) ==  true;
}

function test5()
{
	return checkSledJump([2, 4, 4, 6, 2]) == false;
}

function test6()
{
	return checkSledJump([1, 2, 3]) == false;
}

function test7()
{
	return checkSledJump([1, 2, 3, 2, 1, 2, 3]) == false;
}

export default function testsDay15()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test6 "+test7());
}
