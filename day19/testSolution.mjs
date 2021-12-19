import learn from './solution.mjs';

function test1()
{
	return JSON.stringify(learn(10, [2, 3, 8, 1, 4])) ==JSON.stringify([0, 2]);
}

function test2()
{
	return JSON.stringify(learn(15, [2, 10, 4, 1]))==JSON.stringify([1, 2]);
}

function test3()
{
	return JSON.stringify(learn(25, [10, 15, 20, 5]))==JSON.stringify([0, 1]);
}

function test4()
{
	return JSON.stringify(learn(8, [8, 2, 1]))==JSON.stringify([1, 2]);
}

function test5()
{
	return JSON.stringify(learn(8, [8, 2, 1, 6]))==JSON.stringify([1, 3]);
}

function test6()
{
	return JSON.stringify(learn(4, [10, 14, 20]))==JSON.stringify(null);
}

function test7()
{
	return JSON.stringify(learn(5, [5, 5, 5]))==JSON.stringify(null);
}

export default function testsDay19()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
}
