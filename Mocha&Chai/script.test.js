const imported = require('./script');

test('Возвращение типа данных', () => {
    expect(imported.sum(2,2)).toBe(true);
});

it('Значение равно 5', function() {
    expect(imported.num).toEqual(5);
});

test('Получаем данные из функции', function() {
    expect(typeof(imported.each(imported.arr2, imported.myFunc))).toBe("object");
});
test('Получаем конкретные данные', function() {
    expect(imported.each(imported.arr2, imported.myFunc)).toEqual([ 8, 7, 6, 5, 4 ]);
});
test('Получаем длину результата', function() {
    expect(imported.each(imported.arr2, imported.myFunc).length).toEqual(5);
});