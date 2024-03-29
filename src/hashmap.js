import { CreateLinkedList } from "./linkedList";
import { CreateNode } from "./node";

const CreateHashMap = (capacity = 16) => {
    const _loadFactor = 0.75;
    const _buckets = Array.from({ length: capacity }, () => CreateLinkedList() );
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
        //some testing fn
        getNodes: () => console.log(_nodes),
    }
}

export { CreateHashMap };