import createXmasTree from './solution.mjs';

function test2()
{
	const arbol2Correct =
		"_*_"+"\n"+
		"***"+"\n"+
		"_#_"+"\n"+
		"_#_";


	const arbol2 = createXmasTree(2);

	return JSON.stringify(arbol2Correct)==JSON.stringify(arbol2);
}


function test3()
{
	const arbol3Correct =
		"__*__"+"\n"+
		"_***_"+"\n"+
		"*****"+"\n"+
		"__#__"+"\n"+
		"__#__";


	const arbol3 = createXmasTree(3);

	return JSON.stringify(arbol3Correct)==JSON.stringify(arbol3);
}


function test5()
{
	const arbol5Correct =
		"____*____"+"\n"+
		"___***___"+"\n"+
		"__*****__"+"\n"+
		"_*******_"+"\n"+
		"*********"+"\n"+
		"____#____"+"\n"+
		"____#____";


	const arbol5 = createXmasTree(5);

	return JSON.stringify(arbol5Correct)==JSON.stringify(arbol5);
}


export default function testsDay4()
{
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test5 "+test5());
}
