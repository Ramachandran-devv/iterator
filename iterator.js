// Sequentially access the elements of a collection
var NameRepository = /** @class */ (function () {
    function NameRepository() {
        this.names = ["Robert", "John", "Julie", "Lora"];
    }
    NameRepository.prototype.createIterator = function () {
        return new NameIterator(this.names);
    };
    return NameRepository;
}());
var NameIterator = /** @class */ (function () {
    function NameIterator(collection) {
        this.index = 0;
        this.collection = collection;
    }
    NameIterator.prototype.next = function () {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    };
    NameIterator.prototype.hasNext = function () {
        return this.index < this.collection.length;
    };
    return NameIterator;
}());
// Client code
var namesRepository = new NameRepository();
var iter = namesRepository.createIterator();
while (iter.hasNext()) {
    var name_1 = iter.next();
    console.log("Name: ".concat(name_1));
}
//# sourceMappingURL=iterator.js.map