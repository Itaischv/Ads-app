import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 3030;
const { Pool } = pg;

app.use(bodyParser.json());
app.use(cors());

// PostgreSQL configuration
const pool = new Pool({
    user: process.env.PG_USER,
    host: 'localhost',
    database: process.env.PG_DB_NAME,
    password: process.env.PG_PWD,
    port: 5432
});

// Endpoint to add an event
app.post('/events', async (req, res) => {
    try {
        const { type, timestamp, slot, googleQueryId, timeOnPage } = req.body;
        const insertQuery = 'INSERT INTO events (type, timestamp, slot, googlequeryid, timeonpage) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [type, timestamp, slot, googleQueryId, timeOnPage];
        console.log("values", values)
        const result = await pool.query(insertQuery, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/events', async (req, res) => {
    try {
        const query = 'SELECT * FROM events ORDER BY id DESC LIMIT 20';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
