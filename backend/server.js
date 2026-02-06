const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/students", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


//Testing the api using Postman.

// const Student = require("./models/student");

// app.post("/test", async (req, res) => {
//   const student = await Student.create({
//     fullName: "Test User",
//     email: "test@email.com",
//     course: "Computer Science",
//   });

//   res.json(student);
// });
