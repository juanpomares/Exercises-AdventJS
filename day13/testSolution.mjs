import wrapGifts from './solution.mjs';

function test1()
{
	return JSON.stringify(wrapGifts(["📷", "⚽️"]))===JSON.stringify(['****','*📷*', '*⚽️*', '****']);
}

function test2()
{
	return JSON.stringify(wrapGifts(["🏈🎸","🎮🧸"]))===JSON.stringify([ '******', '*🏈🎸*','*🎮🧸*', '******']);
}


function test3()
{
	return JSON.stringify(wrapGifts(["📷"]))===JSON.stringify(['****','*📷*', '****']);
}


export default function testsDay13()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
}