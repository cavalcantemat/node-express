import express from "express";
import db from "./config/dbConnect.js";
import books from "./Models/Book.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco feito com sucesso');
});

const app = express();

app.use(express.json());

// const books = [
//     { id: 1 , "title": "Senhor dos aneis" },
//     { id: 2, "title": "O Hobbit" }
// ];

app.get('/', (req,res) => {
    res.status(200).send('Curso de node');
});

app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books)
    });
});

app.get('/books/:id', (req, res) => {
    let index = search(req.params.id);
    res.status(200).json(books[index]);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});
app.put('/books/:id', (req, res) => {
    let { id } = req.params;
    let index = search(id);
    books[index].title = req.body.title
    res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
    let { id } = req.params;
    let index = search(id);
    const { title} = books[index];
    books.splice(index, 1);
    res.send(`Livro ${title} excluído com sucesso`);
});

function search(id) {
    return books.findIndex(livro => livro.id == id);
}

export default app;















