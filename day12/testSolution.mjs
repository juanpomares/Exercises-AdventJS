import getMinJump from './solution.mjs';

function test1()
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
}


export default function testsDay12()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
}