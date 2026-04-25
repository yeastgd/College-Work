const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error for openning database: ', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            year INTEGER,
            status TEXT NOT NULL CHECK (status IN ('to-read', 'reading', 'completed'))
        )
    `, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "books" is ready.');
        }
    });
});

app.get('/books', (req, res) => {
    const { status } = req.query;
    let sql = "SELECT * FROM books";
    let params = [];

    if (status) {
        sql += " WHERE status = ?";
        params.push(status);
    }

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 3.2 Получение одной книги по ID
app.get('/books/:id', (req, res) => {
    db.get("SELECT * FROM books WHERE id = ?", [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Book not found" });
        res.json(row);
    });
});

// --- Task 4: Create, Update and Delete ---

// 4.1 Добавление новой книги
app.post('/books', (req, res) => {
    const { title, author, year, status } = req.body;
    const allowed = ['to-read', 'reading', 'completed'];

    if (!title || !author || !status) {
        return res.status(400).json({ error: "Title, author and status are required" });
    }
    if (!allowed.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const sql = `INSERT INTO books (title, author, year, status) VALUES (?, ?, ?, ?)`;
    db.run(sql, [title, author, year, status], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID });
    });
});

// 4.2 Обновление книги
app.put('/books/:id', (req, res) => {
    const { title, year, status } = req.body;
    
    if (status && !['to-read', 'reading', 'completed'].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const sql = `UPDATE books SET title = ?, year = ?, status = ? WHERE id = ?`;
    db.run(sql, [title, year, status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Book not found" });
        res.json({ message: "Book updated successfully" });
    });
});

// 4.3 Удаление книги
app.delete('/books/:id', (req, res) => {
    db.run("DELETE FROM books WHERE id = ?", [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});