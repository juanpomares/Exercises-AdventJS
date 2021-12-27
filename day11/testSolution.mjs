import shouldBuyFidelity from './solution.mjs';

/*function test1()
{
	return shouldBuyFidelity(1)==false;
}

function test2()
{
	return shouldBuyFidelity(100)==true;
}*/


function test1()
{
 return shouldBuyFidelity(10)==false;
}
function test2()
{
 return shouldBuyFidelity(20)==false;
}
function test3()
{
 return shouldBuyFidelity(23)==false;
}
function test4()
{
 return shouldBuyFidelity(24)==true;
}
function test5()
{
 return shouldBuyFidelity(25)==true;
}
function test6()
{
 return shouldBuyFidelity(48)==true;
}
function test7()
{
 return shouldBuyFidelity(100)==true;
}
function test8()
{
 return shouldBuyFidelity(1000)==true;
}

export default function testsDay11()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
	console.log("test8 "+test8());
}
