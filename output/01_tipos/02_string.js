"use strict";
// 
// Strings são cadeias de caracteres.
//
var empresa;
// string definida entre aspas duplas. 
empresa = "Microsoft";
console.log(empresa);
// string definida entre aspas simples.
var donoEmpresa = 'Bill Gates';
// Interpolação de Strings
// observar que a string é limitada com uma crase (`)
var aviso = "A Empresa ".concat(empresa, " tem o s\u00F3cio ").concat(donoEmpresa);
console.log(aviso);
//# sourceMappingURL=02_string.js.map