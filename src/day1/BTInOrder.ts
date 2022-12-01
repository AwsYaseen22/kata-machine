
function walk(cur: BinaryNode<number> | null, path: number[]):number[] {
    if(!cur){
        return path;
    }
    
    // pre recurse
    
    // recurse
    walk(cur.left, path);
    // push the value after there will be not left anymore
    path.push(cur.value)
    walk(cur.right, path);
    
    // post recurse
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}