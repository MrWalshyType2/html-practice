function multiplication(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

let multiply = multiplication(10);
let total = multiply(20);
console.log(total);



function person() {
    let _name;
    return {
        getName: function() {
            return _name;
        },
        setName: function(name) {
            _name = name;
        }
    }
}

let p = person();
p.setName("Fred");
console.log(p.getName());



function counter() {
    let _count = 0;
    return {
        increment: function() {
            _count++;
        },
        decrement: function() {
            _count--;
        },
        getCount: function() {
            return _count;
        }
    }
}

let count = counter();
count.increment();
console.log(count.getCount());
count.decrement();
console.log(count.getCount());