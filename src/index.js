import { CreateHashMap } from "./hashmap";

const map = CreateHashMap();

map.set('don','lhenard');
map.set('nod','dranehl');
map.set('Don','Lhenard');
console.log(map.get('don'));
console.log(map.has('nod'));
console.log(map.get('Don'));
console.log(map.has('asd'));
map.getNodes();