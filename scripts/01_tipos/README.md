#Tipos

> O uso de tipos em variaveis definem a forma como os seus valores serão representados, armazenados na memória e as operações possíveis com essas variáveis.
>

>A característica principal da linguagem TypeScript é o uso da tipagem forte aplicada a suas variaáveis. Definido o tipo a uma variavel, não será possível atribuir um valor de tipo diferente do que a definiu. 
Diferente do JavaScript que permite a tipagem dinamica, o TypeScript associa um tipo a uma variável de duas formas: 
1) Inderencia de Tipo. Nessa forma quando um valor é atribuido a uma variavel, esse tipo passa a ser o definido para a variavel.
> 
```
let messagem = 'Hello world';
console.log(typeof mensagem);
let numero = 1200;
console.log(typeof numero);
let numero = 1200;

```


>2) Tipo definido explicitamente. Nessa forma, a declaração da variavel é acompanhada por um nome de tipo. 
>
```
let messagem: string = 'Hello world';
console.log(typeof mensagem);
let numero: number = 1200;
console.log(typeof numero);
```

##String 
>
O tipo string define uma cadeia de caracteres. Na sua definição a cadeia de caracteres pode estar envolvida por aspas duplas ou aspas simples.
>
```
let messagem: string = 'Hello world';
console.log(mensagem);
let aviso : string = "Hoje vai chover !"; 
console.log(aviso);
```

##number
>
O Tipo number define uma representação binária capaz de armazenar valores numéricos a variaveis. 
>
```
let messagem: string = 'Hello world';
console.log(mensagem);
let aviso : string = "Hoje vai chover !"; 
console.log(aviso);
```

##Union Type
>

>
```
let messagem: string = 'Hello world';
console.log(mensagem);
let aviso : string = "Hoje vai chover !"; 
console.log(aviso);
```

##Boolean
>

>
```
let messagem: string = 'Hello world';
console.log(mensagem);
let aviso : string = "Hoje vai chover !"; 
console.log(aviso);
```
##Array
>

>
```
let messagem: string = 'Hello world';
console.log(mensagem);
let aviso : string = "Hoje vai chover !"; 
console.log(
```  

##Tuple
>

>

##Object
>

>

##Enum
>

>

##Null e undefined
>

>

##Any
>

>






