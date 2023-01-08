import express from "express";
import cors from "cors";
import mysql2 from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "hello01XC",
  database: "patients",
  port: 3306,
});

// mysql connection and error handler
db.connect((error) => {
  if (error) console.log(error);
  console.log("Database is connected successfully! 📄");
});

// get all patients data
app.get("/patients", (req, res) => {
  const query = `SELECT * FROM patients.patients_list;`;
  db.query(query, (error, data) => {
    if (error) {
      console.log(error);
    }
    if (data.length > 0) {
      res.send(data);
    }
  });
});

app.get("/patient/:id", (req, res) => {
  const getID = req.params.id;

  const query = `SELECT * FROM patients.patients_list WHERE ID=${getID};`;

  db.query(query, (error, data) => {
    if (error) {
      console.log(error);
    }
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send({
        message: `no patient found with the ID of ${getID} ⛔`,
      });
    }
  });
});

app.listen(3000, () => {
  console.log(`Hello server is running! 🕹️ `);
});
