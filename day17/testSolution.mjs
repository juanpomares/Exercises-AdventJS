import countPackages from './solution.mjs';

/*function test1()
{
	const carriers = [
	  ['dapelu', 5, ['midu', 'jelowing']],
	  ['midu', 2, []],
	  ['jelowing', 2, []]
	];

	return countPackages(carriers, 'dapelu') == 9;
}

function test2()
{
	const carriers2 = [
	  ['lolivier', 8, ['camila', 'jesuspoleo']],
	  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
	  ['jesuspoleo', 4, []],
	  ['sergiomartinez', 4, []],
	  ['conchaasensio', 3, ['facundocapua', 'faviola']],
	  ['facundocapua', 2, []],
	  ['faviola', 1, []]
	]

	return countPackages(carriers2, 'camila') == 15;
}*/

function test1()
{
 return countPackages([["dapelu",5,["midu","jelowing"]],["midu",2,[]],["jelowing",2,[]]], 'dapelu')==9;
}
function test2()
{
 return countPackages([["dapelu",5,["midu","jelowing"]],["midu",2,[]],["jelowing",2,[]]], 'midu')==2;
}
function test3()
{
 return countPackages([["dapelu",5,["midu","jelowing"]],["midu",2,[]],["jelowing",2,[]]], 'jelowing')==2;
}
function test4()
{
 return countPackages([["lolivier",8,["camila","jesuspoleo"]],["camila",5,["sergiomartinez","conchaasensio"]],["jesuspoleo",4,[]],["sergiomartinez",4,[]],["conchaasensio",3,["facundocapua","faviola"]],["facundocapua",2,[]],["faviola",1,[]]], 'camila')==15;
}
function test5()
{
 return countPackages([["lolivier",8,["camila","jesuspoleo"]],["camila",5,["sergiomartinez","conchaasensio"]],["jesuspoleo",4,[]],["sergiomartinez",4,[]],["conchaasensio",3,["facundocapua","faviola"]],["facundocapua",2,[]],["faviola",1,[]]], 'jesuspoleo')==4;
}
function test6()
{
 return countPackages([["lolivier",8,["camila","jesuspoleo"]],["camila",5,["sergiomartinez","conchaasensio"]],["jesuspoleo",4,[]],["sergiomartinez",4,[]],["conchaasensio",3,["facundocapua","faviola"]],["facundocapua",2,[]],["faviola",1,[]]], 'conchaasensio')==6;
}
function test7()
{
 return countPackages([["lolivier",8,["camila","jesuspoleo"]],["camila",5,["sergiomartinez","conchaasensio"]],["jesuspoleo",4,[]],["sergiomartinez",4,[]],["conchaasensio",3,["facundocapua","faviola"]],["facundocapua",2,[]],["faviola",1,[]]], 'lolivier')==27;
}
function test8()
{
 return countPackages([["a",99,["b"]],["b",1,["c"]],["c",1,["d"]],["d",1,[]]], 'a')==102;
}
function test9()
{
 return countPackages([["a",99,["b"]],["b",1,["c"]],["c",1,["d"]],["d",1,[]]], 'b')==3;
}
function test10()
{
 return countPackages([["a",99,["b"]],["b",1,["c"]],["c",1,["d"]],["d",1,[]]], 'c')==2;
}
function test11()
{
 return countPackages([["a",99,["b"]],["b",1,["c"]],["c",1,["d"]],["d",1,[]]], 'd')==1;
}

export default function testsDay17()
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
