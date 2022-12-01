
type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.head){
            this.head = this.tail = node;
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
        }
        if(idx === this.length){
            this.append(item);
            return;
        }
        if(idx === 0){
            this.prepend(item);
            return;
        }
        let cur = this.getAt(idx) as Node<T>;
        let node = {value: item} as Node<T>;

        node.next = cur;
        node.prev = cur.prev;
        cur.prev = node;
        if(node.prev){
            node.prev.next = cur;
        }
    }

    append(item: T): void {
        this.length++;
        const node = {value: item} as Node<T>;
        if(!this.tail){
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    
    remove(item: T): T | undefined {
        let cur = this.head;
        for (let i = 0; i < this.length && cur; i++) {
            if(cur.value === item){
                break;
            }
            cur = cur.next;
        }
        if(!cur){
            return undefined;
        }
        this.length--;
        if(this.length === 0){
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        if(cur.prev){
            cur.prev.next = cur.next;
            // cur.prev = cur.next;
        }
        if(cur.next){
            cur.next.prev = cur.prev;
            // cur.next = cur.prev;
        }
        if(cur === this.head){
            this.head = cur.next;
        }
        if(cur === this.tail){
            this.tail = cur.prev;
        }
        cur.prev = cur.next = undefined;
        return cur.value
    }
    
    get(idx: number): T | undefined {
        const node = this.getAt(idx);
        return node?.value;

    }
    
    removeAt(idx: number): T | undefined {
        let node = this.getAt(idx) as Node<T>;
        
        this.length--;
        if(this.length === 0){
            const out = this.head?.value
            this.head = this.tail = undefined;
            return out;
        }
        if(!node){
            return undefined;
        }
        if(node.prev){
            node.prev.next = node.next;
            // node.prev = node.next;
        }
        if(node.next){
            node.next.prev = node.prev;
            // node.next = node.prev
        }
        if(node === this.head){
            this.head = node.next
        }
        if(node === this.tail){
            this.tail = node.prev
        }
        node.prev = node.next = undefined;
        return node.value;
    }

    private getAt(idx: Number): Node<T> | undefined{
        let cur = this.head;
        for (let i = 0; i < idx && cur; i++) {
            cur = cur.next;
        }
        return cur
    }
}