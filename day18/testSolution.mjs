import fixFiles from './solution.mjs';

function test1()
{
	const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
	return JSON.stringify(fixFiles(files)) == JSON.stringify(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
}

function test2()
{
	const files2 = ['file', 'file', 'file', 'game', 'game'];
	return JSON.stringify(fixFiles(files2)) == JSON.stringify(['file', 'file(1)', 'file(2)', 'game', 'game(1)']);

}

function test3()
{
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
return JSON.stringify(fixFiles(files3)) == JSON.stringify(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']);
}

export default function testsDay18()
{
	console.log("test1 "+test1());
	console.log("test2 "+test2());
	console.log("test3 "+test3());
}
