import sumPairs from './solution.mjs';
/*
function test1()
{
	let solution=sumPairs([3, 5, 7, 2], 10);
	return solution!=null && solution.length==2 && solution[0]==3 && solution[1]==7;
}

function test2()
{
	let solution=sumPairs([-3, -2, 7, -5], 10);
	return solution==null;
}

function test3()
{
	let solution=sumPairs([2, 2, 3, 1], 4);
	return solution!=null && solution.length==2 && solution[0]==2 && solution[1]==2;
}

function test4()
{
	let solution=sumPairs([6, 7, 1, 2], 8);
	return solution!=null && solution.length==2 && solution[0]==6 && solution[1]==2;
}

function test5()
{
	let solution=sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
	return solution!=null && solution.length==2 && solution[0]==1 && solution[1]==5;
}
*/

function test1()
{
	return JSON.stringify(sumPairs([0,2,3,-1,4], 3))==JSON.stringify([0,3]);
}

function test2()
{
	return JSON.stringify(sumPairs([3,5,7,2], 10))==JSON.stringify([3,7]);
}

function test3()
{
	return JSON.stringify(sumPairs([-3,-2,7,-5], 10))==JSON.stringify(null);
}

function test4()
{
	return JSON.stringify(sumPairs([2,2,3,1], 4))==JSON.stringify([2,2]);
}

function test5()
{
	return JSON.stringify(sumPairs([6,7,1,2], 8))==JSON.stringify([6,2]);
}

function test6()
{
	return JSON.stringify(sumPairs([0,2,2,3,-1,1,5], 6))==JSON.stringify([1,5]);
}

function test7()
{
	return JSON.stringify(sumPairs([0,2,3,-1,4], 3))==JSON.stringify([0,3]);
}



export default function testsDay6()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
}
