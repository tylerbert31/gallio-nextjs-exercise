
# NextJS 14 - Beginner Exercise

### For Kevin Jhay Gallio's Beginner Exercise

## TASK

### BASIC CRUD

1. **Page 1:** Display All Contacts in the "/" home route. Must be a Server Component.
2. **Page 2:** Make a form submission for creating a new contact (Client Component).
3. **Page 3:** Make a form submission for viewing and updating an existing contact (Client Component).
4. **Page 4:** Make a form submission for deleting an existing contact (Client Component).

---

## Table: `contact_list`

### Structure:
```json
{
  "id": "String",
  "firstname": "String",
  "lastname": "String",
  "email": "String",
  "cellphone": "String",
  "address": "String",
  "created": "DateTime",
  "updated": "DateTime"
}
```

---

## IMPORTANT NOTE

### CRUD API Routes

**Required Data:**
```json
{
  "firstname": "String",
  "lastname": "String",
  "email": "String",
  "cellphone": "String",
  "address": "String"
}
```

### Create New:
- **Method:** POST
- **Endpoint:** `/api/contacts`
- **Required Data:** Refer to above
- **Response:** `{message}`

### Get All Contacts:
- **Method:** GET
- **Endpoint:** `/api/contacts`
- **Response:** `[{contact}, {contact}, {contact}]`

### Get One Contact:
- **Method:** GET
- **Endpoint:** `/api/contacts/:id`
- **Response:** `{contact}`

### Update Existing:
- **Method:** PUT
- **Endpoint:** `/api/contacts`
- **Required Data:** `{id, new data}`
- **Response:** `{message}`

### Delete Existing:
- **Method:** DELETE
- **Endpoint:** `/api/contacts`
- **Required Data:** `{id: id}`
- **Response:** `{message}`

---
