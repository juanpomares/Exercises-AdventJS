import getCoins from './solution.mjs';


function test1()
{
	let coins51=getCoins(51);
	return JSON.stringify(coins51)==JSON.stringify([1, 0, 0, 0, 0, 1]);
}

function test2()
{
	let coins3=getCoins(3);
	return JSON.stringify(coins3)==JSON.stringify([1, 1, 0, 0, 0, 0]);
}

function test3()
{
	let coins5=getCoins(5);
	return JSON.stringify(coins5)==JSON.stringify([0, 0, 1, 0, 0, 0]);
}

function test4()
{
	let coins16=getCoins(16);
	return JSON.stringify(coins16)==JSON.stringify([1, 0, 1, 1, 0, 0]);
}

function test5()
{
	let coins100=getCoins(100);
	return JSON.stringify(coins100)==JSON.stringify([0, 0, 0, 0, 0, 2]);
}

export default function testsDay10()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
}
