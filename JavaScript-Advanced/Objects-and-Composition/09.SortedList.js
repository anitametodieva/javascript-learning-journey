function createSortedList(){
    return {
        _list: [],
        _mySort: (a, b) => a - b,
        size: 0,
        add: function(element){
            if(typeof(element) !== "number"){
                return;
            }
            this._list.push(element);
            this._list.sort(this._mySort);
            this.size = this._list.length;
        },
        remove: function(index){
            if(index < 0 || index >= this._list.length){
                return;
            }
            this._list.splice(index, 1);
            this._list.sort(this._mySort);
            this.size = this._list.length;
        }, 
        get: function(index){
            if(index < 0 || index >= this._list.length){
                return;
            }
            return this._list[index];
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));