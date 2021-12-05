function test1()
{
	const date1 = new Date('Dec 1, 2021');
	return daysToXmas(date1)==24;
}

function test2()
{
	const date2 = new Date('Dec 24, 2021 00:00:01');
	return daysToXmas(date2)==1;
}

function test3()
{
	const date3 = new Date('Dec 24, 2021 23:59:59');
	return daysToXmas(date3)==1;
}

function test4()
{
	const date4 = new Date("December 20, 2021 03:24:00");
	return daysToXmas(date4)==5;
}

function test5()
{
	const date5 = new Date('Dec 25, 2021');
	return daysToXmas(date5)==0;
}

function test6()
{
	const date6 = new Date('Dec 26, 2021');
	return daysToXmas(date6)==-1;
}

function test7()
{
	const date7 = new Date('Dec 31, 2021');
	return daysToXmas(date7)==-6;
}

function test8()
{
	const date8 = new Date('Jan 1, 2022 00:00:01');
	return daysToXmas(date8)==-7;
}

function test9()
{
	const date9 = new Date('Jan 1, 2022 23:59:59')
	return daysToXmas(date9)==-7;
}

function tests()
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
}