var Assert = {
    currentFunction: null,
    pass: function() {
        document.writeln("&#10004; " + Assert.currentFunction + ' passed <br/>');
    },
    fail: function() {
        document.writeln("&#10008; " + Assert.currentFunction + ' failed <br/>');
    },
    true: function(a, b, fn) {
        (a === b) ? Assert.pass() : Assert.fail();
    },
    run: function(tests) {
        for (var test in tests) {
            Assert.currentFunction = test;
            try {
                Tests[test](test);
            } catch (error) {
                Assert.fail();
                document.writeln('Message:' + error.message + ' <br/>');
                document.writeln('Stack:' + error.stack);
            }

        }
    }
};