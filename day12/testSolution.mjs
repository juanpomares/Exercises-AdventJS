import getMinJump from './solution.mjs';

/*function test1()
{
	return getMinJump([5,3,6,9,7])==4;
}

function test2()
{
	return getMinJump([2,4,6,8,10])==7;
}


function test3()
{
	return getMinJump([1,2,3,5])==4;
}

function test4()
{
	return getMinJump([2,7,5])==3;
}

function test5()
{
	return getMinJump([9,5,1])==2;
}*/

function test1()
{
	return getMinJump([3,5,6,7,9])==4;
}
function test2()
{
  return getMinJump([10,2,4,6,8])==7;
}
function test3()
{
	return getMinJump([1,5,9])==2;
}
function test4()
{
  return getMinJump([3,5,7])==2;
}
function test5()
{
  return getMinJump([10,14,2,3,6,8])==9;
}
function test6()
{
  return getMinJump([11,14,2,3,5,6,8,9])==10;
}

export default function testsDay12()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test5 "+test6());
}
