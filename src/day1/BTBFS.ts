export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // const q = [head];
    // while (q.length) {
    //     const cur = q.shift();
    //     if(cur?.value === needle){
    //         return true;
    //     }
    //     if(cur?.left){
    //         q.push(cur.left);
    //     }
    //     if(cur?.right){
    //         q.push(cur.right);
    //     }
    // }
    // return false;
    const q: (BinaryNode<number> | null)[] = [head];
    while (q.length) {
        const cur = q.shift() as BinaryNode<number> | undefined | null;
        if(!cur){
            continue;
        }
        if(cur.value === needle){
            return true;
        }
        q.push(cur.left);
        q.push(cur.right);
    }
    return false;
}