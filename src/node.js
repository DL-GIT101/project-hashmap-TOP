const CreateNode = (value = null) => {
    
    let _value = value;
    let _next = null;
    
    return {
        getValue: () => _value,
        setValue: (value) => _value = value,
        getNext: () => _next,
        setNext: (node) => _next = node,
    } 
}

export {CreateNode};