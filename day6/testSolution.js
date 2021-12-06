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

function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());	
	console.log("test5 "+test5());	
}