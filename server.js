const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/datafastbite');
const app = express();
const PORT = process.env.PORT || 3000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET MENU
app.get('/menu', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM menu';
    console.log('Ini GET' );

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// POST MENU
app.post('/menu', (req, res) => {

    console.log('datanya', req.body);
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO menu SET ?';
    console.log('coba create /input baru');
    console.log('datanya=', req.body);

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal menambah menu!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil menambahkan menu!' });
    });
});

// GET MENU ID
app.get('/menu/:id', (req, res) => {
    // buat query sql
    const querySql = `SELECT * FROM menu WHERE id = ${req.params.id}`;
    console.log(`Request id = ${req.params.id}`) 
   

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// DELETE MENU ID
// coba di postman --> (delete)
app.delete('/menu/:id', (req, res) => {
    // buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM menu WHERE id = ?';
    const queryDelete = 'DELETE FROM menu WHERE id = ?';

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika delete berhasil
                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

// PUT MENU ID
app.put('/menu/:id', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM menu WHERE id = ?';
    const queryUpdate = 'UPDATE menu SET ? WHERE id = ?';

    // jalankan query untuk melakukan pencarian data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query update
            koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika update berhasil
                res.status(200).json({ success: true, message: 'Berhasil update data menu!' });
            });
        } else {
            return res.status(404).json({ message: 'Data menu tidak ditemukan!', success: false });
        }
    });
});

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
