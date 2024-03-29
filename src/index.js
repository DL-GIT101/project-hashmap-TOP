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
console.log('length - ' + map.length());
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
console.log('length - ' + map.length());
console.log('---------------');
//length function
console.log('length - ' + map.length());
map.set('css','style');
console.log('set - key: css, value: style - index: ' + map.hash('css'));
map.set('html','frame');
console.log('set - key: html, value: frame - index: ' + map.hash('html'));
console.log('length - ' + map.length());
console.log('---------------');
//clear function
map.clear();
console.log('clear');
console.log('length - ' + map.length());
console.log('get - key: don - result: ' + map.get('don'));
console.log('has - key: ruby - result: ' + map.has('ruby'));
map.set('don','lhenard');
map.set('nod','dranehl');
map.set('Don','Lhenard');
map.set('java','script');
map.set('ruby','rail');
map.set('c','sharp');
console.log('brought back all six nodes')
console.log('---------------');
// keys function
console.log('keys: ' + map.keys());
console.log('keys: ' + map.values());
map.set('php','server');
console.log('set - key: php, value: server - index: ' + map.hash('php'));
console.log('keys: ' + map.keys());
console.log('keys: ' + map.values());
console.log('remove - key: nod - result: ' + map.remove('nod'));
console.log('keys: ' + map.keys());
console.log('keys: ' + map.values());