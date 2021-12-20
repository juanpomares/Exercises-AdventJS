import pangram from './solution.mjs';

function test1()
{
return pangram("Whisky bueno: ¡excitad mi frágil pequeña vejez!")==true;
}
function test2()
{
return pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho") == true;
}
function test3()
{
return pangram("Jovencillo emponzoñado de whisky: ¡qué figurota exhibe!") == true;
}
function test4()
{
return pangram("¡Qué whisky! ¡Qué whisky! ¡Qué whisky!") == false;
}
function test5()
{
return pangram("Esto es una frase larga pero no tiene todas las letras del abecedario") == false;
}
function test6()
{
return pangram("De la a a la z, nos faltan letras") == false;
}
function test7()
{
return pangram("!\"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghijz") == false;
}
function test8()
{
return pangram("!\"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghij") == false;
}
function test9()
{
return pangram("1a2a3a4a5a6a7a8a90a0bcdefghijz_:;,.-ç´`+") == false;
}
function test10()
{
return pangram("abcdefghijklmnopqrstuvwxyz") == false;
}


export default function testsDay20()
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
}
