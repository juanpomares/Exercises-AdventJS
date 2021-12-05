function test1()
{
	const ovejas = [
	  { name: 'Noa', color: 'azul' },
	  { name: 'Euge', color: 'rojo' },
	  { name: 'Navidad', color: 'rojo' },
	  { name: 'Ki Na Ma', color: 'rojo'}
	]
	
	const ovejasFiltradas = contarOvejas(ovejas)

ovejasFiltradas_solution= [{ name: 'Navidad', color: 'rojo' },  { name: 'Ki Na Ma', color: 'rojo' }];
	
	
	
	return JSON.stringify(ovejasFiltradas_solution)==JSON.stringify(ovejasFiltradas);
}


function tests()
{
	console.log("test1 "+test1());
}