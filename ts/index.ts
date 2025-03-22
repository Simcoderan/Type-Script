// Transpilation: Converting TypeScript (TS) code into JavaScript (JS) code

// Example of Type Annotation for a variable
let a1: number = 1; // 'a1' is explicitly declared as a number type

// a1 = "coding techniques"; // Error: Type mismatch (statically typed language)
a1 = 10; // Valid assignment since 'a1' is of type number

// let a2: string = "hi"; // Example of a string type annotation

// Function with Type Annotations for parameters and return type
function add1(a: number, b: number): number { 
    return a + b; // Ensures the return type matches the defined type (number)
}

// Calling the function
const y = add1(1, a1); 
console.log(y); // Output: 3


a1=y;
console.log(a1);

//Basic types

//`number`: Represents numeric values, both integer and floating point.
let num : number=1233_456_789;
console.log(num);     


//`bigint`: Represents large integers beyond the `number` type.
let num1 : bigint =123456879n;
console.log(num1);  

// `string`: Represents textual data.
let character:string = "Typescript";
console.log(character);

// `boolean`: Represents a true or false value.
let isAvailable :boolean= true;

//`array`: Represents an ordered list of elements of a specific type.
//let numArray: type[]
let numArray: number[]=[1,2,3,4];
let CharArray:string[]=["a","b","g"];

// `undefined`: Represents a declared variable without a value assigned.
//let val: undefined=1; ---error
let val:undefined=undefined;
//val=1;--error

// `null`: Represents intentional absence of a value.
let val1:null=null;

//`object`: Represents any non-primitive type (anything except `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
let person: object = { name: "John", age: 30 };
let obj:{name:string,age:number}={
  name:"abc",
  age:10
};

//spread operator
let obj1={...obj};
console.log(obj1);

//replace
obj={...obj,age:44,name:"shreya"};
console.log(obj);



// `tuple`: Represents a fixed-size, ordered collection of elements of possibly different types.
let valArray:[number,string]=[1,'a'];

 //`any`: Represents any type, disabling type checking. Used when the type is unknown or not important.
let numVal;
numVal=1;
numVal='a';














/*


// ==============================
// 🚀 Built-in Types in TypeScript
// ==============================

// ==============================
// 📚 1. Primitive Types
// ==============================

/* 
  1. `number`
*/

/* 
  2. `string`
*/



/* 
  3. `boolean`
*/



/* 
  4. `null`

/* 
  5. `undefined`

/* 
  6. `symbol`: Represents a unique identifier.
  Example: let sym: symbol = Symbol("id");
*/

// let sym: symbol = Symbol("id");  // Example: symbol

/* 
  7. `bigint`
*/

// ==============================
// 📚 2. Object Types
// ==============================

/* 
  1. `object`

/* 
  2. `array`

/* 
  3. `function`: Represents a callable function.
  Example: let greet: (name: string) => string = (name) => "Hello, " + name;
*/

// let greet: (name: string) => string = (name) => "Hello, " + name;  // Example: function

/* 
  4. `tuple`

// ==============================
// 📚 3. Special Types
// ==============================

/* 
  1. `any`: Represents any type, disabling type checking. Used when the type is unknown or not important.
  Example: let anything: any = "Hello"; anything = 42;
*/

// let anything: any = "Hello"; anything = 42;  // Example: any

/* 
  2. `unknown`: Represents any type but requires type checking before using the value.
  Example: let something: unknown = "Hello"; 
           if (typeof something === "string") { console.log(something.length); }
*/

// let something: unknown = "Hello"; if (typeof something === "string") { console.log(something.length); }  // Example: unknown

/* 
  3. `never`: Represents the type of values that never occur (e.g., functions that throw errors or have infinite loops).
  Example: function throwError(): never { throw new Error("Something went wrong!"); }
*/

// function throwError(): never { throw new Error("Something went wrong!"); }  // Example: never

/* 
  4. `enum`: Represents a set of named constants, making it easier to work with fixed sets of values.
  Example: enum Direction { Up, Down, Left, Right } let move: Direction = Direction.Up;
*/

// enum Direction { Up, Down, Left, Right } let move: Direction = Direction.Up;  // Example: enum

// ==============================
// 📚 4. Special Object Types
// ==============================

/* 
  1. `Date`: Represents a date object, used for date and time manipulation.
  Example: let today: Date = new Date();
*/

// let today: Date = new Date();  // Example: Date

/* 
  2. `RegExp`: Represents regular expressions for pattern matching in strings.
  Example: let pattern: RegExp = /abc/;
*/

// let pattern: RegExp = /abc/;  // Example: RegExp

// ==============================
// 📚 5. Function Types
// ==============================

/* 
  1. Function Type: Defines the signature of a function with parameters and return type.
  Example: let add: (a: number, b: number) => number = (a, b) => a + b;
*/

// let add: (a: number, b: number) => number = (a, b) => a + b;  // Example: function type


/*
// ==============================
// 🎯 3. Interview Questions & Answers
// ==============================

// 1. **Difference between `interface` and `type`?**
//    - `interface`: Primarily for object shapes, can be extended or merged.
//    - `type`: More flexible, can define unions, intersections, etc., not limited to object shapes.

// 2. **What are generics?**
//    - Generics allow for type-safe functions or classes that work with any data type.
function tsGeneric<T>(arg: T): T { return arg; } // Generic function example

// 3. **Difference between `any` and `unknown`?**
//    - `any`: No type checking, allows any type.
//    - `unknown`: Requires explicit type checking before usage.

// 4. **What is a type assertion in TypeScript?**
//    - Type assertions allow us to tell the compiler to treat a variable as a specific type, without changing the underlying value.
let someValue: any = "Hello World";
let strLength: number = (someValue as string).length; // Type assertion example

// 5. **What is the difference between `==` and `===`?**
//    - `==`: Checks for equality of values, performs type coercion.
//    - `===`: Checks for equality of both value and type, no type coercion.

// 6. **What are mapped types in TypeScript?**
//    - Mapped types allow you to create new types by transforming properties of an existing type.
type ReadonlyPerson = { readonly [K in keyof tsPerson]: tsPerson[K] }; // Example of mapped type

// 7. **What are optional properties in TypeScript?**
//    - Properties that may or may not be provided when creating an object.
interface tsProduct { name: string; price?: number; } // Optional property example

// 8. **How do TypeScript and JavaScript handle null and undefined?**
//    - In JavaScript, `null` is an object and `undefined` is a primitive value.
//    - In TypeScript, `null` and `undefined` are types, and strict null checks can be enforced.



// ==============================
// 🎯 3. Interview Placement Questions
// ==============================


// 📝 TypeScript Interview Questions:
// 1. **Differences between JavaScript and TypeScript?** 
// - **JavaScript**: Dynamic typing, no type annotations.
// - **TypeScript**: Statically typed with support for interfaces, types, and other features.

// 2. **What is type inference?** 
// Type inference is when TypeScript automatically deduces the type of a variable based on its value or context, reducing the need for explicit type annotations.

// 3. **Difference between interface and type?** 
// - **Interface**: Defines the shape of an object, can be merged using declaration merging.
// - **Type**: Defines the shape and can also be used to create unions or intersections.

// 4. **What are generics?** 
// Generics allow functions or classes to work with any type while preserving the type of the input and output values, making code reusable and type-safe.

// 5. **Explain optional properties.** 
// Optional properties in interfaces are defined using a `?`, meaning that they may or may not be present in an object.

// 6. **Difference between any and unknown?** 
// - **any**: Can hold any type and can be assigned to any type, bypassing type safety.
// - **unknown**: Safer than **any**, requires type checking before performing operations.

// 7. What are mapped types?
// Mapped types allow you to create new types by transforming properties of an existing type.

// 8. **Access modifiers: public, private, protected?** 
// - **public**: Accessible from anywhere.
// - **private**: Accessible only within the class.
// - **protected**: Accessible within the class and subclasses.

// 9. **Explain enums.** 
// Enums allow defining a set of named constants, often used for values that have a limited set of options.

// 10. **How does TypeScript handle null and undefined?** 
// TypeScript provides stricter handling of **null** and **undefined**. You can enable strict null checks to ensure that **null** and **undefined** are handled explicitly.

*/