
function test1()
{
	let groupByMathFloor=groupBy([6.1, 4.2, 6.3], Math.floor);
	return groupByMathFloor[6][0]==6.1 && groupByMathFloor[6][1]==6.3 && groupByMathFloor[4][0]==4.2;
}

function test2()
{
	let gByLenght=groupBy(['one', 'two', 'three'], 'length');
	return gByLenght[3][0]=='one' && gByLenght[3][1]=='two' &&gByLenght[5][0]=='three';
}

function test3()
{
	let gByAge=groupBy([{age: 23}, {age: 24}], 'age')
	return gByAge[23].age==23 && gByAge[24].age==24;
}


function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
}
