import missingReindeer from './solution.mjs';

function test1()
{
	return missingReindeer([0, 2, 3]) == 1;
}

function test2()
{
	return missingReindeer([5, 6, 1, 2, 3, 7, 0]) == 4;
}

function test3()
{
	return missingReindeer([0, 1]) == 2;
}

function test4()
{
	return missingReindeer([3, 0, 1]) == 2;
}

function test5()
{
	return missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) == 8;
}

function test6()
{
	return missingReindeer([0]) == 1;
}


export default function testsDay13()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
}