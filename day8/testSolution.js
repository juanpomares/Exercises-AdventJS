
function test1()
{
	const pricesBtc = [39, 18, 29, 25, 34, 32, 5] ;
	return maxProfit(pricesBtc)==16;
}

function test2()
{
	const pricesEth = [10, 20, 30, 40, 50, 60, 70]
	return maxProfit(pricesEth)==60;
}

function test3()
{
	const pricesDoge = [18, 15, 12, 11, 9, 7];
	return maxProfit(pricesDoge) == -1;
}

function test4()
{
	const pricesAda = [3, 3, 3, 3, 3];
	return maxProfit(pricesAda) == -1;
}


function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
}
