class observe {
    constructor(div) {
        this.element = div.element;
        this.data = div.data;
        this.dom = document.querySelector(this.element);
        const self = this;
        this.binding = new Proxy(this.data, {
            set(target, key, value) {
                target[key] = value;
                self.LoadDiv();
                return true;
            }
        })
        this.LoadDiv();
    }
    LoadDiv() {
        this.dom.innerHTML = this.data.show(this.data.a, this.data.b)
    }
}

let creatediv = {
    element: '#hello',
    data: {
        a: 1,
        b: 2,
        show(a, b) {
            const sum = a + b;
            return `<div>It's ${sum}</div>`
        }
    }
}
let hello = new observe(creatediv);