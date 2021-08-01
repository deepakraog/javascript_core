// Scope Chain and Lexical Environment
// Lexical Environment is the local memory + lexical env of its parent

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();