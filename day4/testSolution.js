function test2()
{
	const arbol2Correct = 
		"____*____"+"\n"+
		"___***___"+"\n"+
		"____#____"+"\n"+
		"____#____";

	
	const arbol2 = createXmasTree(2);
	
	return JSON.stringify(arbol2Correct)==JSON.stringify(arbol2);
}


function test3()
{
	const arbol3Correct = 
		"____*____"+"\n"+
		"___***___"+"\n"+
		"__*****__"+"\n"+
		"____#____"+"\n"+
		"____#____";

	
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


function tests()
{
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test5 "+test5());
}