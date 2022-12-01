function walk(cur: BinaryNode<number> | null, path: number[]):number[] {
    if(!cur){
        return path;
    }
    
    // pre recurse
    
    // recurse
    walk(cur.left, path);
    walk(cur.right, path);
    // push the value after there will be not left and no right anymore
    path.push(cur.value)
    
    // post recurse
    return path;
}


export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}