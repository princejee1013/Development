let a=10
const b=20
var c= 30

if(true){
    let a=40
    const b=50
    var c=60
    console.log(a,b,c) //40 50 60
}
console.log(a,b,c) //10 20 60
//why this is happening with var
//var is function scoped not block scoped
//let and const are block scoped
//let and const are not hoisted
//var is hoisted
//means
//let and const are not accessible before declaration
//var is accessible before declaration


function one(){

    const username="Prince"

    function two(){
        console.log(username)
        // const website=youtube
    }
    // console.log(website)

    two()
}

one() //ReferenceError: youtube is not defined



//Interesting---------------------------
addOne(5)
function addOne(num){
    return num+1
}


addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo= function(num){
    return num+2
}


// **************E X P L A N A T I O N *********************
/*In JavaScript, the behavior you're observing stems from **hoisting** and the differences between **function declarations** and **function expressions**. Let's break down why `addOne` works before its definition while `addTwo` does not.

### 1. Function Declaration (`addOne`)

```javascript
addOne(5);

function addOne(num) {
    return num + 1;
}
```

**Why It Works:**

- **Hoisting of Function Declarations:** JavaScript hoists function declarations to the top of their containing scope. This means that the entire function `addOne` is available throughout the scope, even before its actual declaration in the code.

- **Execution Flow:**
  1. **Hoisting Phase:** JavaScript moves the function declaration to the top.
  2. **Runtime Phase:** When `addOne(5)` is called, the function is already defined and can execute without issues.

**Equivalent Hoisted Code:**

```javascript
function addOne(num) {
    return num + 1;
}

addOne(5);
```

### 2. Function Expression (`addTwo`)

```javascript
addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};
```

**Why It Fails:**

- **Hoisting of Variables (Not Function Bodies):** While variable declarations (`var`, `let`, `const`) are hoisted, only the declarations are moved to the top, **not** their assignments. For `const` and `let`, the variables are hoisted but remain uninitialized in the **Temporal Dead Zone (TDZ)** until their actual declaration is evaluated.

- **Temporal Dead Zone (TDZ):** Accessing a `let` or `const` variable before its declaration results in a `ReferenceError` because the variable is in the TDZ.

- **Execution Flow:**
  1. **Hoisting Phase:** The declaration `const addTwo` is hoisted, but it's uninitialized.
  2. **Runtime Phase:** When `addTwo(5)` is called, JavaScript recognizes `addTwo` exists but hasn't been initialized yet, leading to a `ReferenceError`.

**Key Points:**

- **Function Declarations** are fully hoisted with their definitions.
- **Function Expressions** assigned to `const` or `let` are hoisted as uninitialized variables.
- **Calling a Function Expression Before Its Declaration** results in a `ReferenceError` due to the TDZ.

### 3. How to Fix It

To ensure `addTwo` can be called before its definition, you can use a **function declaration** instead of a **function expression**:

```javascript
addTwo(5); // Works fine

function addTwo(num) {
    return num + 2;
}
```

Alternatively, if you prefer using function expressions, ensure they are defined **before** they are called:

```javascript
const addTwo = function(num) {
    return num + 2;
};

addTwo(5); // Works fine
```

### 4. Summary

- **Function Declarations (`function addOne() {}`):** Fully hoisted with definitions. Can be called before their declaration in the code.
  
- **Function Expressions (`const addTwo = function() {}`):** Only the variable declaration is hoisted (as `const` or `let`), but not the assignment. Cannot be called before their definition due to the Temporal Dead Zone.

Understanding these nuances of hoisting and the differences between function declarations and expressions is crucial for avoiding such errors and writing predictable JavaScript code. */