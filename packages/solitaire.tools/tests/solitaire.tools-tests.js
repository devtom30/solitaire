Tinytest.add('tools ArrayCompare', function (test) {
    var t1 = ['a', 'b', 'c'];
    var t2 = ['a', 'b', 'c'];

    test.isTrue(t1.equals(t2));

    var t3 = ['a', ['b', 'c']];
    test.isFalse(t1.equals(t3));

    var t4 = ['a', ['b', 'c'], ['b', 'c']];
    test.isFalse(t1.equals(t4));

    var t5 = ['b', 'c'];
    var t6 = ['a', t5, ['b', 'c']];
    test.isTrue(t4.equals(t6));
});
