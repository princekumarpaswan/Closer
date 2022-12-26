// - Create a closure which has one inner function

function a(n) {
    function b(x) {
        console.log(n + x)
    }
    b(n)
}
a(2)


//- Create a closure which has three inner functions

function z(n) {
    function b(x) {
        function v(d) {
            function f(h) {
                console.log(h + d + x + n)
            }
            f(d)
        }
        v(x)
    }
    b(n)
}
z(2)

