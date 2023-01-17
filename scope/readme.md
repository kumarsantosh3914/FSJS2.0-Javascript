# SCOPE OF let, var, const 
# var [mdn Blog](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
Whenever we use a var anywhere inside a function, the variable gets function scope. If we use outside a function, no matter if is is enclosed in a block or not, it will give the variable global scope.

# let [mdn Blog](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
Whenever we initialize a variable with let it always gets the scope of enclosing BLOCK.

If  we declare, let outside any Block, then it doesnot get complete global scope.

let doesn't allow redeclaration, but var does allow it. if you initialize a variable with let outside any block then alos it will not become acceseble completely in the global scope, but if you do with var, it will be.

# const [mdn Blog](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
It also has block scope, (same as let) the only difference is it doesn't allow ressignment.

# HOW JS, PARSES THE CODE ?
So we know that JS is not interpreted, it definetely is hybrid i.e compiled + interpreted. So whenever we try to execute a JS code, JS first parses the whole code, in this parsing phase it assigns scopes to variables/functions. Once done, then it reads the code & executes it. Every variable in your code will be used in one of the following ways->

1> Either it will be getting a values assigned i.e it is used as a target.

2> Or it will be used to retrives a values i.e it will be used as source.

What JS does is, it will start the parsing phase. Outside everything it maintains global scope, but the moment it goes inside a function it start maintaing scope of that function also.

# Autoglobals [Stack overflow](https://stackoverflow.com/questions/53330616/please-explain-automatically-global-in-javascript)
In JS if we keep on seauly scope of a variable in outer scopes & no where find it, we automatically consider it in global scope. this happens during execution phase.

-> Autoglobal only works when target reference & not source.
