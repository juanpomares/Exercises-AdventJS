import createXmasTree from './solution.mjs';

function test1()
{
return createXmasTree(25)=='________________________*________________________'+"\n"+
'_______________________***_______________________'+"\n"+
'______________________*****______________________'+"\n"+
'_____________________*******_____________________'+"\n"+
'____________________*********____________________'+"\n"+
'___________________***********___________________'+"\n"+
'__________________*************__________________'+"\n"+
'_________________***************_________________'+"\n"+
'________________*****************________________'+"\n"+
'_______________*******************_______________'+"\n"+
'______________*********************______________'+"\n"+
'_____________***********************_____________'+"\n"+
'____________*************************____________'+"\n"+
'___________***************************___________'+"\n"+
'__________*****************************__________'+"\n"+
'_________*******************************_________'+"\n"+
'________*********************************________'+"\n"+
'_______***********************************_______'+"\n"+
'______*************************************______'+"\n"+
'_____***************************************_____'+"\n"+
'____*****************************************____'+"\n"+
'___*******************************************___'+"\n"+
'__*********************************************__'+"\n"+
'_***********************************************_'+"\n"+
'*************************************************'+"\n"+
'________________________#________________________'+"\n"+
'________________________#________________________';
}

function test2()
{
return createXmasTree(25)=='________________________*________________________'+"\n"+
'_______________________***_______________________'+"\n"+
'______________________*****______________________'+"\n"+
'_____________________*******_____________________'+"\n"+
'____________________*********____________________'+"\n"+
'___________________***********___________________'+"\n"+
'__________________*************__________________'+"\n"+
'_________________***************_________________'+"\n"+
'________________*****************________________'+"\n"+
'_______________*******************_______________'+"\n"+
'______________*********************______________'+"\n"+
'_____________***********************_____________'+"\n"+
'____________*************************____________'+"\n"+
'___________***************************___________'+"\n"+
'__________*****************************__________'+"\n"+
'_________*******************************_________'+"\n"+
'________*********************************________'+"\n"+
'_______***********************************_______'+"\n"+
'______*************************************______'+"\n"+
'_____***************************************_____'+"\n"+
'____*****************************************____'+"\n"+
'___*******************************************___'+"\n"+
'__*********************************************__'+"\n"+
'_***********************************************_'+"\n"+
'*************************************************'+"\n"+
'________________________#________________________'+"\n"+
'________________________#________________________';
}

function test3()
{
return createXmasTree(2)=='_*_'+"\n"+
'***'+"\n"+
'_#_'+"\n"+
'_#_';
}

function test4()
{
return createXmasTree(3)=='__*__'+"\n"+
'_***_'+"\n"+
'*****'+"\n"+
'__#__'+"\n"+
'__#__';
}


function test5()
{
return createXmasTree(4)=='___*___'+"\n"+
'__***__'+"\n"+
'_*****_'+"\n"+
'*******'+"\n"+
'___#___'+"\n"+
'___#___';
}

function test6()
{
	return createXmasTree(1)=='*'+"\n"+
'#'+"\n"+
'#';
}


export default function testsDay4()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
}
