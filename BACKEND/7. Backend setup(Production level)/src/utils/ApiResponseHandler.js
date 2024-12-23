class ApiResponseHandler{
    constructor(statusCode, data,message="Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success=statusCode <400
    }
}







/*
This code defines a utility class, `ApiResponseHandler`, designed to create structured and standardized API responses in an Express.js or similar web server framework. Here's an explanation of its functionality:

---

### **Purpose of `ApiResponseHandler`**
- Provides a consistent structure for all API responses, making it easier to handle responses on the client side.
- Includes essential fields like `statusCode`, `data`, `message`, and `success` to represent the outcome of an API call.

---

### **Code Walkthrough**

#### 1. **Constructor**
The constructor initializes the response object with the provided values:

```javascript
constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
}
```

##### **Parameters:**
- **`statusCode`**:
  - The HTTP status code for the response (e.g., `200` for success, `404` for not found, `500` for server error).
  - Determines the type of response (success or error).

- **`data`**:
  - Contains the actual response data (e.g., objects, arrays, or any JSON-serializable value).

- **`message`** (default: `"Success"`):
  - A human-readable message describing the response status (e.g., `"Operation successful"`, `"Resource not found"`).

---

#### 2. **`this.success`**
```javascript
this.success = statusCode < 400;
```
- A boolean field automatically calculated based on the `statusCode`:
  - **`true`** if `statusCode` is less than `400` (indicating success).
  - **`false`** if `statusCode` is `400` or higher (indicating client or server errors).

---

### **How to Use the `ApiResponseHandler` Class**

#### **Example 1: Successful Response**
```javascript
const response = new ApiResponseHandler(200, { id: 1, name: "John Doe" });
console.log(response);
// Output:
// {
//     statusCode: 200,
//     data: { id: 1, name: "John Doe" },
//     message: "Success",
//     success: true
// }
```

#### **Example 2: Error Response**
```javascript
const response = new ApiResponseHandler(404, null, "Resource not found");
console.log(response);
// Output:
// {
//     statusCode: 404,
//     data: null,
//     message: "Resource not found",
//     success: false
// }
```

---

### **Integrating with Express.js**

You can use this class to standardize API responses across your application. For example:

#### **Sending Responses in Routes**
```javascript
app.get('/example', (req, res) => {
    const data = { id: 1, name: "John Doe" };
    const response = new ApiResponseHandler(200, data);
    res.status(response.statusCode).json(response);
});
```

#### **Error Handler with `ApiResponseHandler`**
```javascript
app.use((err, req, res, next) => {
    const response = new ApiResponseHandler(500, null, "Internal Server Error");
    res.status(response.statusCode).json(response);
});
```

---

### **Why Use `ApiResponseHandler`?**
1. **Consistency**:
   - Ensures all responses (success or error) have the same structure.
   - Helps client applications (e.g., frontend or mobile apps) handle responses predictably.

2. **Readability**:
   - Makes it clear what each response contains (`statusCode`, `data`, `message`, `success`).

3. **Reusability**:
   - Reduces repetitive code for formatting responses in multiple routes or error handlers.

---

This utility is ideal for creating clean, predictable, and maintainable API responses in your server-side application.
 */