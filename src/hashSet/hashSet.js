import { CreateLinkedList } from "./linkedList";

const CreateHashSet = (capacity = 16) => {
    const _loadFactor = 0.75;
    let _buckets = Array.from({ length: capacity }, () => CreateLinkedList());

    function _hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % capacity;
    }

    function _length() {
            let size = 0;
            for (const map of _buckets) {
                size += map.size();
            }
            return size;
    }

    function entries() {
        let arr = [];
        for (const map of _buckets) {
            arr = arr.concat(map.allKeysValues());
        }
        return arr;
    }

    function clear() { 
        _buckets = Array.from({ length: capacity }, () => CreateLinkedList());
    }

    return {
        hash: _hash,
        set: (key) => {
            if( _length()/capacity >= _loadFactor){
                capacity *= 2;
                const allNodes = entries();
                clear();
                allNodes.forEach(node => {
                    const index = _hash(node);
                    _buckets[index].append(node);
                });
            }
 
            const index = _hash(key);
            _buckets[index].append(key);
        },
        get: (key) => {
            const index = _hash(key);
            return _buckets[index].contains(key);
        },
        has: (key) => {
            const index = _hash(key);
            return _buckets[index].find(key);
        },
        remove: (key) => {
            const index = hash(key);
            return _buckets[index].removeAt(key);
        },
        length: _length,
        clear: clear,
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
        entries: entries,
    }
}

export { CreateHashSet };