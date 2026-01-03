import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "jdbc:mysql://localhost:3306/oodo",
  user: "root",
  password: "dbms",
  database: "globetrotter"
});
