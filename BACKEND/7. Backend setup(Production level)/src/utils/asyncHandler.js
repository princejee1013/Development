//M E T H O D 1: PROMISES mostly used
const asyncHandler =(reqHandlerFn)=>{
    (req, res, next)=>{

        Promise.resolve(reqHandlerFn(req, res, next)).catch((err)=> next(err))

    }
}



export {asyncHandler}

//its a higher order function that accept another function as a parameter

/* M E T H O D 2 : TRY CATCH
const asyncHandler =()=> (func)=> async (req, res, next)=>{

    try {

        await func(req, res, next)
        
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message || 'Server Error'
        })
        
    }
}
     */












/* E X P L A T I O N
This code is a utility function called `asyncHandler`, often used in **Express.js** applications to handle asynchronous route handlers more effectively. Let me break it down step by step:

---

### **What it Does**
- The `asyncHandler` function takes an asynchronous request handler (`reqHandlerFn`) as an argument.
- It ensures that any errors thrown during the execution of the asynchronous code inside `reqHandlerFn` are caught and passed to the Express error handler using `next(err)`.

---

### **How It Works**
1. **Input**:
   - The function receives a `reqHandlerFn`, which is typically an asynchronous function (`async (req, res, next)`).
2. **Output**:
   - Returns a new function `(req, res, next)` that wraps the execution of `reqHandlerFn` in a `Promise`.

---

### **Code Walkthrough**

```javascript
const asyncHandler = (reqHandlerFn) => { 
    (req, res, next) => { 
        Promise.resolve(reqHandlerFn(req, res, next))
            .catch((err) => next(err)); 
    }; 
};
```

- **Line 1 (`const asyncHandler`)**:
  - Declares the `asyncHandler` function, which takes a `reqHandlerFn` (an asynchronous route handler).

- **Line 2 (`(req, res, next) =>`)**:
  - Returns a middleware function that wraps the original `reqHandlerFn`.

- **Line 3 (`Promise.resolve`)**:
  - Executes the `reqHandlerFn` and ensures it is wrapped in a `Promise` to handle both synchronous and asynchronous errors.

- **Line 4 (`.catch((err) => next(err))`)**:
  - Catches any errors that occur in `reqHandlerFn` and forwards them to Express's error-handling middleware via `next(err)`.

---

### **Why It's Useful**
1. **Handles Errors Automatically**:
   - In asynchronous route handlers, any errors must be passed to the Express error handler using `next(err)`.
   - Without this utility, you would need to manually wrap every `async` handler with `try-catch`.

2. **Clean and Readable Code**:
   - Avoids repetitive `try-catch` blocks in every route handler.
   - Simplifies error management in the application.

---

### **Example Usage**

Without `asyncHandler`:
```javascript
app.get('/example', async (req, res, next) => {
    try {
        const data = await someAsyncFunction();
        res.json(data);
    } catch (err) {
        next(err);
    }
});
```

With `asyncHandler`:
```javascript
app.get('/example', asyncHandler(async (req, res, next) => {
    const data = await someAsyncFunction();
    res.json(data);
}));
```

---

### **How It Connects to Express Error Handling**
- When `next(err)` is called, Express automatically forwards the error to the defined error-handling middleware, for example:
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
```

---

### **Enhancements**
The code as written has a small issue: it doesn't return the middleware function from `asyncHandler`. It should be corrected as follows:

```javascript
const asyncHandler = (reqHandlerFn) => {
    return (req, res, next) => {
        Promise.resolve(reqHandlerFn(req, res, next))
            .catch((err) => next(err));
    };
};
```

Now it correctly returns the middleware function for use in your route definitions.

---

This utility is a concise and effective way to manage errors in asynchronous Express route handlers, leading to cleaner and more maintainable code. */