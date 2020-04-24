[1, 2, 3].reduce((acc, cur, index, array) => acc + cur)
//非递归reduce
Array.prototype.ireduce = function ireduce(fn, init) {
    let res = init ? init : this[0];
    let start = init ? 0 : 1;
    for (let i = start; i < this.length; i++) {
        res = fn(res, this[i], i, this);
    }
    return res;
};
//递归reduce
const _ireduce2 = (fn, res, arr) => {
    if (arr.length === 0) {
        return res;
    }
    const [head, ...rest] = arr;
    return _ireduce2(fn, fn(res, head), rest);
}
Array.prototype.ireduce2 = function ireduce2(fn, init) {
    let arr = this;
    return _ireduce2(fn, init, arr);
}
const arr = [1, 2, 3];
console.log(arr.ireduce2((acc, cur) => acc + cur, 0))

/*Array.prototype.imap = function imap(fn) {
    return this.ireduce((acc, cur) => [...acc, fn(cur)], [])
}
console.log([1, 2, 3].imap(x => x * 2))

Array.prototype.iflat = function iflat(depth = 1) {
    let arr = this;
    while (depth && arr.some(Array.isArray)) {
        arr = [].concat(...arr)
        depth -= 1;
    }
    return arr;
}
Function.prototype.icall = function icall(context = window, ...args) {
    const temkey = Symbol('tem');
    context[temkey] = this;
    const res = context[temkey](...args)
    delete context[temkey]
    return res;
}
Function.prototype.ibind = function ibind(context, ...args) {
    return (...rest) => this.apply(context, [...args, ...rest])
}
Object.icreate = function icreate(proto) {
    function noop() {
        noop.prototype = proto;
        noop.prototype.constructor = noop
        return new noop;
    }
}
function inew(Constructor, ...args) {
    const instance = Object.create(Constructor.prototype)
    const result = Constructor.apply(instance, args)
    return result instanceof Object ? result : instance;
}
function iInstanceof(left, right) {
    const proto = Object.getPrototypeOf(left)
    while (true) {
        if (proto === null) {
            return false;
        }
        if (proto === right) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}
function debounce(fn, delay) {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(fn, delay, ...args)
    }
}
function throttle() {
    let canrun = true
    return (...args) => {
        if (!canrun) return
        canrun = false
        setTimeout(() => {
            fn(...args)
            canrun = true;
        }, delay)
    }
}*/