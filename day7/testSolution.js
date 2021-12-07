function test1()
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
}

function tests()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
}