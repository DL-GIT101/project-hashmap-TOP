import { CreateNode } from "./node";

const CreateLinkedList = () => {
    let _headNode = null;

    return {
        append: (key, value) => {
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    node.setNext(CreateNode(key, value));
                } else {
                    tailCheck(node.getNext());
                }
            }
            if(_headNode == null) {
                _headNode = CreateNode(key, value);
            }else {
                tailCheck(_headNode);
            }
        },
        prepend: (value) => {
            const newNode = CreateNode(value);
            newNode.setNext(_headNode);
            _headNode = newNode;
        },
        size: () => {
            let iteration = 0;
            const tailCheck = (node) => {
                if(node == null) {
                    iteration += 0;
                } else {
                    iteration += 1;
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return iteration;
        },
        head: () => _headNode,
        tail: () => {
            let lastNode = null;
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    lastNode = node;
                } else {
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return lastNode;
        },
        at: (index) => {
            let counter = 0;
            let atNode = null;
            const check = (node) => {
                if(counter == index) {
                    atNode = node;
                } else {
                    counter += 1;
                    check(node.getNext());
                }
            }
            check(_headNode);
            return atNode;
        },
        pop: () => {
            const tailCheck = (node) => {
                if(node.getNext() == null){
                    _headNode = null;
                }
                else if(node.getNext().getNext() == null) {
                    node.setNext(null);
                } else {
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
        },
        contains: (key) => {
            const tailCheck = (node) => {
                if(node == null) {
                    return null;
                } else if(node.getKey() == key) {
                    return node.getValue();
                } else {
                    return tailCheck(node.getNext());
                }
            }
            return tailCheck(_headNode);
        },
        find: (key) => {
            const tailCheck = (node) => {
                if(node == null) {
                    return false;
                } else if(node.getKey() == key) {
                    return true;
                } else {
                    return tailCheck(node.getNext());
                }
            }
            return tailCheck(_headNode);
        },
        toString: () => {
            let result = "";
            const tailCheck = (node) => {
                if(node == null){
                    result += 'null';
                } else {
                    result += '( ' + node.getValue()  + ' )' +  ' -> ';
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return result;
        },
        insertAt: (value, index) => {
            let iteration = 0;
            const indexAt = (node) => {
                if(iteration == index){
                    const newNode = CreateNode(value);
                    newNode.setNext(node);
                    return newNode;
                } else if(node == null) {
                    return;
                } else {
                    iteration += 1;
                    node.setNext(indexAt(node.getNext()));
                    return node;
                }
            }
            _headNode = (indexAt(_headNode));
        },
        removeAt: (key) => {
            let result = false;
            const indexAt = (node) => {
                if(node == null) {
                    return;
                } else if(node.getKey() == key){
                    result = true;
                    const newNode = node.getNext();
                    return newNode;
                } else {
                    result = true;
                    node.setNext(indexAt(node.getNext()));
                    return node;
                }
            }
            _headNode = (indexAt(_headNode));
            return result;
        }
    }
}

export {CreateLinkedList}