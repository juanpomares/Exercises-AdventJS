import countPackages from './solution.mjs';

function test1()
{
	const carriers = [
	  ['dapelu', 5, ['midu', 'jelowing']],
	  ['midu', 2, []],
	  ['jelowing', 2, []]
	];

	return countPackages(carriers, 'dapelu') == 9;
}

function test2()
{
	const carriers2 = [
	  ['lolivier', 8, ['camila', 'jesuspoleo']],
	  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
	  ['jesuspoleo', 4, []],
	  ['sergiomartinez', 4, []],
	  ['conchaasensio', 3, ['facundocapua', 'faviola']],
	  ['facundocapua', 2, []],
	  ['faviola', 1, []]
	]

	return countPackages(carriers2, 'camila') == 15;
}

export default function testsDay17()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
}
