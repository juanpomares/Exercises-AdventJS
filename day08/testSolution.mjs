import maxProfit from './solution.mjs';

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

function test5()
{
 return maxProfit([1,2,3,4])==3;
}

function test6()
{
 return maxProfit([6,5,4,3])==-1;
}

function test7()
{
 return maxProfit([1,1,1])==-1;
}


export default function testsDay8()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
	console.log("test7 "+test7());
}
