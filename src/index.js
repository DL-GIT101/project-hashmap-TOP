import { CreateHashMap } from "./hashmap";

const map = CreateHashMap();

//set function
map.set('don','lhenard');
console.log('set - key: don, value: lhenard - index: ' + map.hash('don'));
map.set('nod','dranehl');
console.log('set - key: nod, value: dranehl - index: ' + map.hash('nod'));
map.set('Don','Lhenard');
console.log('set - key: Don, value: Lhenard - index: ' + map.hash('Don'));
map.set('java','script');
console.log('set - key: java, value: script - index: ' + map.hash('java'));
map.set('ruby','rail');
console.log('set - key: ruby, value: rail - index: ' + map.hash('ruby'));
map.set('c','sharp');
console.log('set - key: c, value: sharp - index: ' + map.hash('c'));
console.log('---------------');
//get function
console.log('get - key: don - result: ' + map.get('don'));
console.log('get - key: java - result: ' + map.get('java'));
console.log('---------------');
//has function
console.log('has - key: ruby - result: ' + map.has('ruby'));
console.log('has - key: php - result: ' + map.has('php'));
console.log('---------------');
//remove function
console.log('remove - key: nod - result: ' + map.remove('nod'));
console.log('remove - key: javascript - result: ' + map.remove('javascript'));

map.getNodes();