import contarOvejas from './solution.mjs';

function test1()
{
	return JSON.stringify(contarOvejas([{"name":"Noa","color":"azul"},{"name":"Euge","color":"rojo"},{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"},{"name":"Nnnnnn","color":"rojo"},{"name":"Aaa aaa","color":"rojo"},{"name":"na","color":"azul"}])) == JSON.stringify([{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"}]);
}

function test2()
{
	return JSON.stringify(contarOvejas([{"name":"Noa","color":"azul"},{"name":"Euge","color":"rojo"},{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"},{"name":"Nnnnnn","color":"rojo"},{"name":"Aaa aaa","color":"rojo"},{"name":"na","color":"azul"}])) == JSON.stringify([{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"}]);
}

function test3()
{
	return JSON.stringify(contarOvejas([{"name":"Noa","color":"azul"},{"name":"Euge","color":"rojo"},{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"},{"name":"Nnnnnn","color":"rojo"},{"name":"Aaa aaa","color":"rojo"},{"name":"na","color":"azul"}])) == JSON.stringify([{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"}]);
}

function test4()
{
	return JSON.stringify(contarOvejas([{"name":"Noa","color":"azul"},{"name":"Euge","color":"rojo"},{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"},{"name":"Nnnnnn","color":"rojo"},{"name":"Aaa aaa","color":"rojo"},{"name":"na","color":"azul"}])) == JSON.stringify([{"name":"Navidad","color":"rojo"},{"name":"Ki Na Ma","color":"rojo"}]);
}


export default function testsDay1()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
}
