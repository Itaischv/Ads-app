import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg'
import cors from 'cors';
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(cors());

// PostgreSQL configuration
const client = new pg.Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PWD,
    host: 'localhost',
    port: 5432,
    database: process.env.PG_DB_NAME
});


const createEventsTable = async () => {
    try {
        await client.connect();
        const query = `CREATE TABLE IF NOT EXISTS events (
                                                   id SERIAL PRIMARY KEY,
                                                   type VARCHAR(255) NOT NULL,
                                                   timestamp TIMESTAMP NOT NULL,
                                                   slot VARCHAR(255),
                                                   googleQueryId VARCHAR(255),
                                                   timeOnPage NUMERIC(10, 3)
                           );`
        await client.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

createEventsTable().then(r => console.log(r));

// Posting an event:

app.post('/events', async (req, res) => {
    try {
        const { type, timestamp, slot, googleQueryId, timeOnPage } = req.body;
        const insertQuery = 'INSERT INTO events (type, timestamp, slot, googlequeryid, timeonpage) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [type, timestamp, slot, googleQueryId, timeOnPage];
        const result = await client.query(insertQuery, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Fetch events:
app.get('/events', async (req, res) => {
    try {
        const query = 'SELECT * FROM events ORDER BY id DESC LIMIT 20';
        const result = await client.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
