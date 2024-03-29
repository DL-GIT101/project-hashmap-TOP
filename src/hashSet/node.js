const CreateNode = ( key ) => {
    
    let _key    = key;
    let _next   = null;
    
    return {
        getKey: () => _key,
        setKey: (key) => _key = key,
        getNext: () => _next,
        setNext: (node) => _next = node,
    } 
}

export {CreateNode};