// What is Module pattern?

var Module = (function () {
    function privateMethod() {
        // do something
        console.log('private');
    }

    return {
        publicMethod: function () {
            // can call priveteMethod();
            console.log('public');
        },
    };
})();

Module.publicMethod();
Module.privateMethod();