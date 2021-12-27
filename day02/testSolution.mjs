import listGifts from './solution.mjs';

function test1()
{
	return JSON.stringify(listGifts('bici coche balón _playstation bici coche peluche')) == JSON.stringify({"bici":2,"coche":2,"balón":1,"peluche":1});
}

function test2()
{
	return JSON.stringify(listGifts('_bici _ a m __ b c a b c ')) == JSON.stringify({"a":2,"m":1,"b":2,"c":2});
}



export default function testsDay2()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
}
