const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;


const dbUser = 'blogPost';
const password = 'blogPost1502';


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jf95v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('blogsPhoto'));
app.use(fileUpload());






const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const blogPostCollection = client.db("blogwebsite").collection("blogspost");
    console.log("Database Connected");

    // Post Query
    app.post('/addBlogPost', (req, res) => {
            // const file = req.files.file;
            const name = req.body.name;
            const description = req.body.description;

            // const newImg = file.data;
            // const encImg = newImg.toString('base64');

            // var image = {
            //     contentType: file.mimetype,
            //     size: file.size,
            //     img: Buffer.from(encImg, 'base64')
            // };
            blogPostCollection.insertOne({ name, description })
                .then(result => {
                    res.send(result.insertedCount > 0);
                })
        })
        // Read Query
    app.get('/bloglist', (req, res) => {
        blogPostCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    // Update Query
    app.get('/showdata/:id', (req, res) => {
        blogPostCollection.find({ _id: ObjectId(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents[0]);
            })
    })

    app.patch('/update/:id', (req, res) => {
        // console.log(req.body.name);
        blogPostCollection.updateOne({ _id: ObjectId(req.params.id) }, {
                $set: { name: req.body.name, description: req.body.description }
            })
            .then(result => {
                // console.log(result)
                res.send(result.modifiedCount > 0);
            })
    })


    // Delete Query
    app.delete('/delete/:id', (req, res) => {
        console.log(req.params.id);
        blogPostCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then(result => {
                res.send(result.deletedCount > 0);
            })
    })


});

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(5000);