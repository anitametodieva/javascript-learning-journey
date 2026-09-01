interface CountableSet<T> {
add(item:T): void;
remove(item: T): void;
contains(item: T): boolean;
getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private dict = new Map<T, number>();

    add(item: T): void {
        this.dict.set(item, (this.dict.get(item) || 0) + 1);
    }

    remove(item: T): void {
        if (this.dict.has(item) && this.dict.get(item)! > 0) {
            this.dict.set(item, this.dict.get(item)! -1);
        }
    }

    getNumberOfCopies(item: T): number {
        return this.dict.get(item) || 0;
    }

    contains(item: T): boolean {
        return this.getNumberOfCopies(item) > 0;
    }
}

let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));