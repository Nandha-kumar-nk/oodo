const db = require("../db");

exports.calculateBudget = (req, res) => {
  const tripId = req.params.tripId;

  const sql = `
    SELECT 
      c.name AS city,
      ta.activity_date AS day,
      SUM(a.cost) AS day_cost
    FROM trip_activities ta
    JOIN activities a ON ta.activity_id = a.id
    JOIN trip_stops ts ON ta.trip_stop_id = ts.id
    JOIN cities c ON ts.city_id = c.id
    WHERE ts.trip_id = ?
    GROUP BY c.name, ta.activity_date
  `;

  db.query(sql, [tripId], (err, rows) => {
    if (err) return res.status(500).json(err);

    let total = 0;
    const breakdown = {};

    rows.forEach(row => {
      total += row.day_cost;

      if (!breakdown[row.city]) {
        breakdown[row.city] = {
          total: 0,
          days: {}
        };
      }

      breakdown[row.city].total += row.day_cost;
      breakdown[row.city].days[row.day] = row.day_cost;
    });

    // Save total budget
    const saveSql = `
      INSERT INTO budgets (trip_id, total_budget)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE total_budget = ?
    `;

    db.query(saveSql, [tripId, total, total]);

    res.json({
      tripId,
      totalBudget: total,
      breakdown
    });
  });
};
