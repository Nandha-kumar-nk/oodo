const db = require("../db");

exports.createTrip = (req, res) => {
  const { title, description, start_date, end_date } = req.body;

  const sql = `
    INSERT INTO trips (user_id, title, description, start_date, end_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [req.userId, title, description, start_date, end_date],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Trip created", tripId: result.insertId });
    }
  );
};

exports.getTrips = (req, res) => {
  const sql = "SELECT * FROM trips WHERE user_id = ?";

  db.query(sql, [req.userId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.deleteTrip = (req, res) => {
  const sql = "DELETE FROM trips WHERE id = ? AND user_id = ?";

  db.query(sql, [req.params.id, req.userId], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Trip deleted" });
  });
};
