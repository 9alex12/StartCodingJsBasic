import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Tipos de datos</h1>
<h3>Primitivos: </h3>
  <h4>
    Number, strings, Booleanos, Undefined, Null, Symbol(ES6), Bigint(ES2020)
  </h4>
<h3>Objetos: </h3>
  <h4></h4>
<h1>Expresiones vs Declaraciones</h1>
  <h3>Expresion: Produce un valor y puede ser escrita en cualquier lugar donde se espera un valor</h3>
  <h3>Declaracion: Ejecuta una accion,sin producir valor, puede ser reemplazado por una expresion</h3>
<h1>Manipulacion De Tipos</h1>
  <h3>Valores Literales: Directo en el codigo no dependen del input de usuarios o de datos de terceros</h3>
  <h3>Conversion de string a number:parseInt,Number(),+</h3>
  <h3>Conversion a String:toString,toUpperCase(),toLowerCase()</h3>
  <h3>Concatenacion</h3>
  <h3>Conversion a Booleano {!!}</h3>
<h1>Operadores</h1>
  <h3>Aritmeticos</h3>
    <h5>Unarios(-,+,typeof)</h5>
    <h5>Binarios(+,-,/,*,%)
  <h3>Logicos</h3>
    <h5>Binarios(&&,||,!,===,==,<>)</h5>
    <h5>Ternarios(?): reemplaza el if/else </h5>
<h1>Variables</h1>
  <h3>Lugar en memoria</h3>
`;
