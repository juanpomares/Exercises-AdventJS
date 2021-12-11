import listGifts from './solution.mjs';

function test1()
{
	const carta = 'bici coche balón _playstation bici coche peluche';


	const regalos = listGifts(carta);

	const regalos_solution=
	{
		bici: 2,
		coche: 2,
		balón: 1,
		peluche: 1
	};

	return JSON.stringify(regalos_solution)==JSON.stringify(regalos);
}


export default function testsDay2()
{
	console.log("test1 "+test1());
}
