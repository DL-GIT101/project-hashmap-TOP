import { CreateLinkedList } from "./linkedList";

const CreateHashMap = (capacity = 16) => {
    const _loadFactor = 0.75;
    let _buckets = Array.from({ length: capacity }, () => CreateLinkedList());
    let _nodes = 0; 

    function hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % capacity;
    }

    return {
        hash: hash,
        set: (key, value) => {
            const index = hash(key);
            _buckets[ index ].append(key, value);
            _nodes++;
        },
        get: (key) => {
            const index = hash(key);
            return _buckets[index].contains(key);
        },
        has: (key) => {
            const index = hash(key);
            return _buckets[index].find(key);
        },
        remove: (key) => {
            const index = hash(key);
            
            if(_buckets[index].removeAt(key)){
                _nodes--;
                return true;
            }else{
                return false;
            }
        },
        length: () => {
            let size = 0;
            for (const map of _buckets) {
                size += map.size();
            }
            return size;
        },
        clear: () => {
            _buckets = Array.from({ length: capacity }, () => CreateLinkedList());
            _nodes = 0; 
        },
        keys: () => {
            let arr = [];
            for (const map of _buckets) {
                arr = arr.concat(map.allKeys());
            }
            return arr;
        },
        values: () => {
            let arr = [];
            for (const map of _buckets) {
                arr = arr.concat(map.allValues());
            }
            return arr;
        },
        entries: () => {
            let arr = [];
            for (const map of _buckets) {
                arr = arr.concat(map.allKeysValues());
            }
            return arr;
        },
    }
}

export { CreateHashMap };