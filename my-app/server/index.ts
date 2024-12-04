import express from 'express'; // import du framework express 
import { createPool, ResultSetHeader} from 'mysql2/promise';
import { error } from 'console';

// configuration du serveur sur le port 3000 et initialisation de l'app avc express 

const app = express();
const port = 3000;
const cors = require ('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// création data base avec Node.js et mysql.promise 
async function initializeDatabase() {
    const connection = await pool.getConnection();
    try {
        await connection.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    } finally {
        connection.release();
    }
}

initializeDatabase();

app.use((req, res, next) => {
    if (req.url.endsWith('.tsx')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    next();
  });

// routes 

// routes pour récupérer toutes les données des articles 
app.get('/api/articles', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors du chargement des articles !' });
    }
});

// route pour avoir un seul article avec son ID 
app.get('/api/articles/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [req.params.id]);
        if (Array.isArray(rows) && rows.length === 0) {
            return res.status(404).json({ error: 'Aucun article trouver ' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors du chargement' });
    }
});

// création d'un nouvel article 
app.post('/api/articles', async (req, res) => {
    console.log('Received POST request:', req.method, req.url, req.body);
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    console.log('Champs manquants:', { title, content, author });
    return res.status(400).json({error: "Champs manquants"})
  }
  try {
    console.log('Veuillez remplir les champs manquants :', { title, content, author });
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO articles (title, content, author) VALUES (?, ?, ?)',
      [title, content, author]
    );
    res.status(201).json({ id: result.insertId, title, content, author });
  } catch (error) {
    console.error('Error during insert:', error);
    res.status(500).json({ error: 'Erreur lors de la création de l article ' });
  }
});

//lancer le serveur 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});