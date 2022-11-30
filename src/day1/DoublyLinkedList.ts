
type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.head){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
}
    insertAt(item: T, idx: number): void {
        this.length++;
        if (idx > this.length) {
            throw new Error("the index is outside the list boundaries!");
        }else if(idx === this.length){
            this.append(item);
            return;
        }else if(idx === 0){
            this.prepend(item);
            return;
        }
        let cur = this.head;
        for (let i = 0; i < idx && cur; i++) {
            cur = cur.next;
        }
        cur = cur as Node<T>;

        let node = {value: item} as Node<T>;

        node.next = cur;
        node.prev = cur.prev;
        cur.prev = node;
        if(cur.prev){
            cur.prev.next =cur;
        }

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {
        let cur = this.head;
        for (let i = 0; i < idx && cur; i++) {
            cur = cur.next;
        }
        return cur?.value;

}
    removeAt(idx: number): T | undefined {

}
}