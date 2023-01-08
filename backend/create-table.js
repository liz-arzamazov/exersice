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
  password: "123",
  database: "test",
  port: 3306,
});

// mysql connection and error handler
db.connect((error) => {
  if (error) console.log(error);
  console.log("Database is connected successfully! 📄");
});

sb.connect((error) => {
  if (error) throw error;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log("Table created");
  });
});
