# Student Management System (MERN Stack)

A simple web application to **manage student records** using the **MERN stack**.  
Users can **create, read, update, and delete (CRUD)** student data.

---

##  Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas or local)  
- **HTTP Client:** Axios  
- **Styling:** Basic CSS (optional: Tailwind CSS)  
- **Tools:** Nodemon, Vite  

---

## ⚡ Setup Steps

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd student-management-system
````

### 2. Backend Setup

```bash
cd backend
npm install
```

1. Create a `.env` file in the backend folder with the following content:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

2. Start the backend server:

```bash
npm run dev
```

* Backend runs at: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* Frontend runs at: `http://localhost:5173`

---

##  Challenges Faced

* Handling **case-sensitive paths** in Linux for imports
* Integrating **frontend React components** with backend API
* Managing **edit/update form state** for students
* Ensuring **basic validation and error handling** for CRUD operations

---

##  Functionality

* Add a student (Full Name, Email, Course)
* View all students in a table
* Edit/update student details
* Delete a student
* REST API endpoints with proper error handling

```


