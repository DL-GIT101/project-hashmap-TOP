const CreateNode = ( key, value ) => {
    
    let _key     = key;
    let _value  = value;
    let _next   = null;
    
    return {
        getKey: () => _key,
        setKey: (key) => _key = key,
        getValue: () => _value,
        setValue: (value) => _value = value,
        getNext: () => _next,
        setNext: (node) => _next = node,
    } 
}

export {CreateNode};