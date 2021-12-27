import contains from './solution.mjs';

/*function test1()
{
	const almacen = {
	  'estanteria1': {
		'cajon1': {
		  'producto1': 'coca-cola',
		  'producto2': 'fanta',
		  'producto3': 'sprite'
		}
	  },
	  'estanteria2': {
		'cajon1': 'vacio',
		'cajon2': {
		  'producto1': 'pantalones',
		  'producto2': 'camiseta' // <- ¡Está aquí!
		}
	  }
	}

	return contains(almacen, 'camiseta')==true;
}

function test2()
{
	const otroAlmacen = {
	  'baul': {
		'fondo': {
		  'objeto': 'cd-rom',
		  'otro-objeto': 'disquette',
		  'otra-cosa': 'mando'
		}
	  }
	}

	return contains(otroAlmacen, 'gameboy')==false;
}*/

function test1()
{
	return contains({"estanteria1":{"cajon1":{"producto1":"coca-cola","producto2":"fanta","producto3":"sprite"}},"estanteria2":{"cajon1":"vacio","cajon2":{"producto1":"pantalones","producto2":"camiseta"}}}, 'camiseta')==true;
}

function test2()
{
	return contains({"baul":{"fondo":{"objeto":"cd-rom","otro-objeto":"disquette","otra-cosa":"mando"}}}, 'gameboy')==false;
}

function test3()
{
	return contains({"a":"b"}, 'b')==true;
}

function test4()
{
	return contains({}, 'b')==false;
}

function test5()
{
	return contains({"a":{"b":{"c":{"d":{"e":"f"}}}}}, 'f')==true;
}

function test6()
{
	return contains({"a":{"b":{"c":{"d":{"e":"fa"}}}}}, 'f')==false;
}




export default function testsDay7()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
	console.log("test4 "+test4());
	console.log("test5 "+test5());
	console.log("test6 "+test6());
}
