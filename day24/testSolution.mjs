import checkIsSameTree from './solution.mjs';

function test1()
{
	const tree = {
	  value: 1,
	  left: { value: 2, left: null, right: null },
	  right: { value: 3, left: null, right: null }
	}

	return checkIsSameTree(tree, tree)==true;
}

function test2()
{
		const tree = {
		  value: 1,
		  left: { value: 2, left: null, right: null },
		  right: { value: 3, left: null, right: null }
		}

	const tree2 = {
	  value: 1,
	  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
	  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
	}

	return checkIsSameTree(tree, tree2)==false;
}



function test3()
{
	return checkIsSameTree({"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}}, {"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}})==true;
}
function test4()
{
	return checkIsSameTree({"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}}, {"value":1,"right":{"value":3,"left":null,"right":null},"left":{"value":2,"left":null,"right":null}})==true;
}
function test5()
{
	return checkIsSameTree({"value":1,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}},"right":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}}, {"value":1,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}},"right":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}})==true;
}
function test6()
{
return checkIsSameTree({"value":1,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":6,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null}}},
	{"value":1,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":6,"left":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null},"right":{"value":5,"left":{"value":7,"left":{"value":3,"left":null,"right":null},"right":null},"right":null}}})==true;
}
function test7()
{
	return checkIsSameTree({"value":1,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}},"right":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}}, {"value":1,"right":{"value":5,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}},"left":{"value":4,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}}})==true;
}
function test8()
{
	return checkIsSameTree({"value":1,"right":{"value":5,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}},"left":{"value":4,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}}}, {"value":1,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}},"right":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":2,"left":null,"right":null}}})==true;
}
function test9()
{
	return checkIsSameTree({"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}}, {"value":1,"left":{"value":3,"left":null,"right":null},"right":{"value":5,"left":null,"right":null}})==false;
}
function test10()
{
	return checkIsSameTree({"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}}, {"value":1,"left":{"value":2,"left":{"value":3,"left":null,"right":null},"right":{"value":4,"left":null,"right":null}},"right":{"value":5,"left":{"value":6,"left":null,"right":null},"right":{"value":7,"left":null,"right":null}}})==false;
}
function test11()
{
	return checkIsSameTree({"value":1,"left":{"value":2,"left":null,"right":null},"right":{"value":3,"left":null,"right":null}}, {"value":1,"right":{"value":5,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}},"left":{"value":4,"right":{"value":2,"left":null,"right":null},"left":{"value":1,"left":null,"right":null}}})==false;
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
	console.log("test10 "+test10());
	console.log("test11 "+test11());
}
