const Book = require('../../model/books')

const CreateBook = async (req, res) => {

    const book = new Book({
        bookName:req.body.bookName,
        bookauthor:req.body.bookauthor,
        bookDescription:req.body.bookDescription,
        bookprice :req.body.bookprice,
        userid : req.userId
       })
    book.save()
    .then(result =>{
        res.status(200).json({
            newBook : result
        })
     })
     .catch(err => {
        res.status(500).json({
            error:err
        })
     })
}

const Getbook = (req,res) => {

    if(req.query.id){
      const id = req.params.id;
      Book.findById(id)
      .then((data)=> {
        if(!data){
            res.status(404).send({message: 'Not found book with id' + id});
        }
        else{
            res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({message:'Error occured'})
      })
    }
    else{
        Book.find()
        .then(result => {
            res.status(200).json({
                projectData : result
            });
        })
        .catch(err =>{
           
            res.status(500).json({
                error:err
            })
        })
    }
   
}

const updatebook = async (req, res) => {
    const { bookName, bookauthor, bookDescription, bookprice } = req.body;
    const id = req.params.id;
    const book = await CreateProject.findByIdAndUpdate(id);
  
    book.bookName = bookName || book.bookName;
    book.bookauthor = bookauthor || book.bookauthor;
    book.bookDescription = bookDescription || book.bookDescription;
    book.bookprice = bookprice || book.bookprice;
  
    book
      .save()
      .then((data) => {
        res.json({
          message: "project is updated at mongo",
          updatedbook: data,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  };

  const deletebook = (req, res)=> {
    const id = req.params.id;

    Book.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message:`cannot delete with id ${id} Maybe id is wrong`})
        }
        else{
            res.send({
                message : "book was deleted successfully!"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message : "Could not delete book with id " + id
        })
    })
}


module.exports = {CreateBook, Getbook, updatebook, deletebook };