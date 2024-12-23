class ApiError extends Error{

    constructor(
        statusCode,
        message="Something Went Wrong",
        errors=[],
        statck=""



    ){
        super(message)
        this.statusCode = statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors

        if(statck){
            this.stack=statck

        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}
































/*
This utility code defines a custom error class, `ApiError`, which extends the built-in `Error` class in JavaScript. It is designed to create standardized error objects with additional properties commonly required in API responses. Let’s break it down step-by-step for better understanding.

---

### **Purpose of `ApiError`**
1. Provides a structured and consistent way to handle errors in an API.
2. Extends the standard `Error` class to include additional fields like `statusCode`, `errors`, `success`, and `data`.
3. Allows detailed error messages and error stack traces for debugging purposes.

---

### **Code Walkthrough**

#### 1. **`class ApiError extends Error`**
- This means `ApiError` inherits all functionality from the built-in `Error` class.
- It adds custom properties and behavior to the standard `Error` class.

---

#### 2. **`constructor()`**
The `constructor` initializes the `ApiError` instance with specific properties:

```javascript
constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    stack = ""
)
```

##### **Parameters:**
- `statusCode`: The HTTP status code representing the error (e.g., `404` for Not Found, `500` for Internal Server Error).
- `message`: A human-readable error message (default is `"Something Went Wrong"`).
- `errors`: An array of additional error details, often used for validation errors (default is an empty array).
- `stack`: A custom stack trace string (optional).

---

#### 3. **`super(message)`**
- Calls the parent `Error` class constructor to initialize the `message` property.
- This ensures the `message` is properly set as part of the standard `Error` object.

---

#### 4. **Instance Properties**
The `constructor` sets additional properties on the `ApiError` instance:

```javascript
this.statusCode = statusCode;
this.data = null;                // Optional field to hold related data (if any)
this.message = message;          // The error message
this.success = false;            // Indicates the failure of the API call
this.errors = this.errors;       // Array of additional error details
```

##### Notes:
- `this.errors = this.errors` is a mistake. It should be `this.errors = errors` to correctly set the passed `errors` parameter.
- These properties are used to structure the error response consistently.

---

#### 5. **Stack Trace Handling**
```javascript
if (stack) {
    this.stack = stack;          // Uses the provided stack trace if given
} else {
    Error.captureStackTrace(this, this.constructor);
}
```

- If a custom `stack` is provided, it assigns it to `this.stack`.
- If not, it uses `Error.captureStackTrace` to create a standard stack trace that omits the `ApiError` constructor from the trace (useful for debugging).

---

### **How to Use the `ApiError` Class**
This class can be used to create and throw API-specific errors in your application. Here’s an example:

#### **Example 1: Throwing a Custom API Error**
```javascript
import { ApiError } from './ApiError';

app.get('/example', (req, res, next) => {
    try {
        throw new ApiError(404, "Resource not found", ["Invalid ID"]);
    } catch (err) {
        next(err); // Passes the error to the Express error handler
    }
});
```

#### **Example 2: Express Error Handler**
```javascript
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
            data: err.data
        });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
```

---

### **Improvements to the Code**
1. **Fix the `errors` Assignment**:
   Change this line:
   ```javascript
   this.errors = this.errors;
   ```
   To:
   ```javascript
   this.errors = errors;
   ```

2. **Optional `data` Field**:
   - If `data` is always optional, you can pass it as a parameter in the constructor for flexibility.

---

### **Why Use `ApiError`?**
1. **Consistency**: Ensures all API errors have the same structure, making it easier to handle on the client side.
2. **Debugging**: Provides detailed error information (status code, message, stack trace) for debugging during development.
3. **Customizable**: Allows you to include specific fields like `errors` and `data` to provide more context for an error.

This utility is especially useful in production-grade Express.js applications to streamline error handling.
*/