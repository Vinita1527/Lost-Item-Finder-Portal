//server.js 
const express = require('express'); 
const connectToDatabase = 
require('.https://cloud.mongodb.com/v2/66302bd9469f7169521d36bb#/metrics/replicaSet/66302c
 6f81809867f2931cd2/explorer/fsd/assignment/fsdproject/');  
const app = express(); 
const port = 3001;  
connectToDatabase().then((db) => { 
    // Define your API routes here 
    app.get('/', async (req, res) => { 
        const collection = db.collection('assignment');  
        const documents = await collection.find({}).toArray(); 
        res.send(documents); 
    }); 
    app.listen(port, () => { 
        console.log(`Server is running on port ${port}`); 
    }); 
}).catch(err => { 
    console.error("Failed to start server", err); 
}); 
