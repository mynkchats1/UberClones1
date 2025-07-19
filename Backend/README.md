# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "your_password"
}
```

#### **Field Requirements**
- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **201 Created**
- **Description:** User registered successfully.
- **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "<user_id>",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketID": null
      }
    }
    ```

#### **400 Bad Request**
- **Description:** Validation failed or missing required fields.
- **Body:**
    ```json
    {
      "errors": [
        {
          "type": "field",
          "msg": "First name must be atleast 3 characters long",
          "path": "fullname.firstname",
          "location": "body"
        }
      ]
    }
    ```

---

### **Example Request**

```http
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepassword"
}
```

---

### **Notes**
- Passwords are securely hashed before storage.
- The response includes a JWT token for authentication.
- All fields are required unless specified otherwise.