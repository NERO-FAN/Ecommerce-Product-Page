const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');

PORT=8080;

// connect to db
let db;
(async () => {
	db = await open({
		filename: 'products.sqlite',
		driver: sqlite3.Database
	});
})();

app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());

app.get('/', async (req, res) => {
	const [users, items, cart_items, images] = await Promise.all([
		await db.all('SELECT * FROM users'),
		await db.all('SELECT * FROM items'),
		await db.all('SELECT * FROM cart_items'),
		await db.all('SELECT * FROM images')
	]);

	const result = {
		users,
		items,
		cart_items,
		images
	};

	res.json(result);
});

app.get('/course/:id', async (req, res) => {
	const sections = await db.all('SELECT * FROM section WHERE course_id = ?', [req.params.id]);
	res.json(sections);
});

// app.post('/add_section', async (req, res) => {
// 	const result = await db.run('INSERT INTO section (course_id, instructor_id) VALUES (?, ?)', [req.body.course_id, req.body.instructor_id]);
// 	if (result.changes === 0)
// 		res.json({'status': 'NONE'});
// 	else
// 		res.json({'status': 'OK'});
// });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));