const a = "1+1";
const b = Function("return "+a)();
console.log(b);