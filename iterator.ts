// Sequentially access the elements of a collection

// The Iterator design pattern is a behavioral design pattern that provides a systematic way
//  to access and traverse the elements of a collection without exposing the underlying structure of the collection. 
// It effectively separates the mechanics of accessing and iterating over the elements of a collection from the collection itself.

interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface Aggregate {
    createIterator(): Iterator<string>;
}

class NameRepository implements Aggregate {
    private names: string[] = ["Robert", "John", "Julie", "Lora"];

    public createIterator(): Iterator<string> {
        return new NameIterator(this.names);
    }
}

class NameIterator implements Iterator<string> {
    private index: number = 0;
    private collection: string[];

    constructor(collection: string[]) {
        this.collection = collection;
    }

    public next(): string {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    }

    public hasNext(): boolean {
        return this.index < this.collection.length;
    }
}

// Client code
const namesRepository = new NameRepository();
const iter = namesRepository.createIterator();

while (iter.hasNext()) {
    const name = iter.next();
    console.log(`Name: ${name}`);
}
