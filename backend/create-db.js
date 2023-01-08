import mysql2 from "mysql2";
import data from "./data.json" assert { type: "json" };

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "your_db_password",
  port: 3306,
});

db.connect((error) => {
  if (error) {
    throw error;
  }

  const createDatabase = "CREATE DATABASE test";

  db.query(createDatabase, (error) => {
    if (error) {
      throw error;
    }
    console.log("Database created! 🎉");
  });

  const createTable =
    "CREATE TABLE `test`.`patients` ( `ID` TEXT, `First` TEXT, `Last` TEXT, `LMP` TEXT, `DOB` TEXT);";

  db.query(createTable, (error) => {
    if (error) {
      throw error;
    }
    console.log("Table created! 📈");
  });

  const insertData = (localData) => {
    const response = [];
    for (let i = 0; i < localData.length; i++) {
      const data = localData[i];

      db.execute(
        `INSERT INTO test.patients (ID, First, Last, LMP, DOB) VALUES ('${data.ID}', '${data.First}', '${data.Last}', '${data.LMP}', '${data.DOB}');`
      );
    }
    return { response };
  };

  insertData(data);

  const createAgeColumn = "ALTER TABLE test.patients ADD COLUMN `AGE` TEXT;";
  db.query(createAgeColumn, (error) => {
    if (error) {
      throw error;
    }
    console.log("Age Column Created! 🎉");
  });

  db.execute(
    "UPDATE test.patients SET AGE = CONCAT(timestampdiff(YEAR, DOB, NOW()), '.', timestampdiff(MONTH, DOB, NOW()) % 12);"
  );

  const createGaColumn = "ALTER TABLE test.patients ADD COLUMN `GA` TEXT;";
  db.query(createGaColumn, (error) => {
    if (error) {
      throw error;
    }
    console.log("GA Column Created! 🎉");
  });

  db.execute(
    "UPDATE test.patients SET GA = CONCAT(timestampdiff(WEEK, LMP , NOW()), 'w', timestampdiff(DAY, LMP, NOW()) % 12, 'd');"
  );
});
