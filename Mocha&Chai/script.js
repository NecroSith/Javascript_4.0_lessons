// Функция sum должна возвращать тип данных true. Проверить её на это.
let assert = require('chai').assert,
    expect = require('chai').expect;

function sum(a, b) {
	return a + b > 10;
}

describe("Возвращение типа данных", function() {
    it('Получаем True', function() {
        assert.equal(sum(2,2), true);
    });
});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe('Соответствие значению', function() {
    it('Значение равно 5', function() {
        assert.equal(num, 5);
    });
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr2, myFunc));

describe('arr', function() {
    it('Получаем данные из функции', function() {
        assert.typeOf(each(arr2, myFunc), 'array');
    });
    it('Получаем конкретные данные', function() {
        // assert.equal(each(arr2, myFunc), [ 8, 7, 6, 5, 4 ]);
        expect(each(arr2, myFunc)).to.deep.equal([ 8, 7, 6, 5, 4 ]);
    });
    it('Получаем длину результата', function() {
        assert.equal(each(arr2, myFunc).length, 5);
    });
});

module.exports = {
    sum: sum,
    num: num,
    each: each,
    arr2: arr2,
    myFunc: myFunc
}