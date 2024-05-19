# NextJS 14 - Beginner Excercise

# For Kevin Jhay Gallio's Beginner Excercise

# TASK

BASIC CRUD

# Page 1. Display All Contacts in "/" home route. Must be a Server Component

# Page 2. Make a form submission for creating a new contact (Client Component)

# Page 3. Make a form submission for viewing and updating an existing contact (Client Component)

# Page 4. Make a form submission for deleting an existing contact (Client Component)

---

Table: "contact_list"

structure: {
id: String,
firstname: String,
lastname: String,
email: String,
cellphone: String,
address: String,
created: DateTime,
updated: DateTime
}

---

# IMPORTANT NOTE

CRUD api routes

required data: {
firstname: String,
lastname: String,
email: String,
cellphone: String,
address: String,
}

Create New:
Method: POST
endpoint: /api/contacts
Required data: refer above
Response: {message}

Get All Contacts:
Method: GET
endpoint: /api/contacts
Response: [{contact}, {contact}, {contact}]

Get One Contact:
Method: GET
endpoint: /api/contacts/id
Response: {contact}

Update Existing:
Method: PUT
endpoint: /api/contacts
Requried data: {id, new data}
Response: {message}

Delete Existing:
Method: DELETE
endpoint: /api/contacts
Requried data: {id: id}
Response: {message}
