
function walk(cur: BinaryNode<number> | null, path: number[]):number[] {
    if(!cur){
        return path;
    }
    
    // pre recurse
    path.push(cur.value)
    
    // recurse
    walk(cur.left, path);
    walk(cur.right, path);
    
    // post recurse
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}