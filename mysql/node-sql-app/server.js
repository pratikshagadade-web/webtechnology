const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root", // ⚠️ CHANGE THIS
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Connection Failed:", err);
    } else {
        console.log("✅ Connected to MySQL");
    }
});

// CREATE
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

    db.query(sql, [name, age, course], (err, result) => {
        if (err) return res.send(err);
        res.send("Student Added");
    });
});

// READ
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });
});

// UPDATE
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, course } = req.body;

    const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

    db.query(sql, [name, age, course, id], (err, result) => {
        if (err) return res.send(err);
        res.send("Student Updated");
    });
});

// DELETE
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
        if (err) return res.send(err);
        res.send("Student Deleted");
    });
});

// Server start
app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});