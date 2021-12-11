
function test1()
{
	return shouldBuyFidelity(1)==false;
}

function test2()
{
	return shouldBuyFidelity(100)==true;
}

function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
}
