function extensibleObject() {
    const parent = {};
    const childObj = Object.create(parent);

    childObj.extend = function (obj) {
        const objArr = Object.entries(obj);

        for(let [key, value] of objArr) {
            if(typeof value === 'function') {
                parent[key] = value;
            } else {
                childObj[key] = value;
            }
        }
    }

    return childObj;

}

const myObj = extensibleObject();

const template = {
extensionMethod: function () {},
extensionProperty: 'someString'
}

myObj.extend(template);