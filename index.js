const express=require('express')
const app=express()
const port=3000

const books = require('./books');

// Middleware for accessing body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/books', (req,res)=>{
    res.status(200).json(books)
})

app.get('/books/:id', (req,res)=>{
    const id = req.params.id
    const foundBook=books.find(book=>book.id.toString()===id)
    if(foundBook){
        res.status(200).json(foundBook)
    }else{
        res.sendStatus(404)
    }
})

app.post('/books', (req,res)=>{
    console.log(req.body)
    const bookToSave=req.body.book
    books.push(bookToSave)
    res.status(201).json(req.body.book)
    
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const foundBookIndex = books.findIndex((book) => book.id.toString()=== id)
    console.log(foundBookIndex)
    if (foundBookIndex > -1) {
      books.splice(foundBookIndex, 1)
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })