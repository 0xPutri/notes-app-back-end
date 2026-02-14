# Notes API

Simple RESTful Notes API built with **Node.js** and **Express.js**. Provides CRUD operations with in-memory data storage.

## 📌 Features

* Full CRUD operations for notes (create, retrieve all, retrieve by ID, update, delete)
* RESTful API with structured JSON responses and proper HTTP status codes
* Express.js server with CORS enabled and in-memory data storage

## 🛠 Tech Stack

* Node.js
* Express.js
* nanoid
* CORS

## 🚀 Installation

1. Clone repository
2. Install dependencies
   
   ```bash
   npm install
   ```
3. Run server
   
   ```bash
   npm start
   ```

Server runs at:

```
http://localhost:3000
```

## 📂 API Endpoints

| Method | Endpoint     | Description                                    |
| ------ | ------------ | ---------------------------------------------- |
| POST   | `/notes`     | Create a new note with title, tags, and body   |
| GET    | `/notes`     | Retrieve all stored notes                      |
| GET    | `/notes/:id` | Retrieve a specific note by its unique ID      |
| PUT    | `/notes/:id` | Update title, tags, or body of a specific note |
| DELETE | `/notes/:id` | Delete a specific note by its unique ID        |

## 📝 Example Request (Create Note)

```json
POST /notes
{
  "title": "Belajar Backend",
  "tags": ["nodejs", "api"],
  "body": "Membuat REST API dengan Express"
}
```

## ⚠️ Note

This project uses **in-memory storage**, so all data will be lost when the server restarts.