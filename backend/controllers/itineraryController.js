import db from "../db.js";
// <-- use import and .js extension

export const addCityToTrip = (req, res) => {
  const { city_id, start_date, end_date, position } = req.body;

  const sql = `
    INSERT INTO trip_stops (trip_id, city_id, start_date, end_date, position)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [req.params.tripId, city_id, start_date, end_date, position],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "City added to trip" });
    }
  );
};

export const addActivity = (req, res) => {
  const { trip_stop_id, activity_id, activity_date } = req.body;

  const sql = `
    INSERT INTO trip_activities (trip_stop_id, activity_id, activity_date)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [trip_stop_id, activity_id, activity_date],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Activity added" });
    }
  );
};

export const getItinerary = (req, res) => {
  const sql = `
    SELECT ts.id AS stopId, c.name AS city, ts.start_date, ts.end_date,
           a.name AS activity, ta.activity_date
    FROM trip_stops ts
    JOIN cities c ON ts.city_id = c.id
    LEFT JOIN trip_activities ta ON ts.id = ta.trip_stop_id
    LEFT JOIN activities a ON ta.activity_id = a.id
    WHERE ts.trip_id = ?
    ORDER BY ts.position
  `;

  db.query(sql, [req.params.tripId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
