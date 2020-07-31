import express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDB = async (operations) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, { useUnifiedTopology: true });
        const db = client.db('e-commerce');

        await operations(db);
        
        client.close();
    } catch(error) {
        console.log(`THIS IS THE ERROR: ${error}`);
        res.status(500).json({ message: 'Error connecting to db', error });
    }
};

app.post('/api/login-success/:name', (req, res) => res.send(`Hello ${name}!`));

app.post('/api/edit-item/', async (req, res) => {
    const { name, price, description, imageUrl, username } = req.body;
    
    withDB(async (db) => {
        const updatedItemInfo = await db.collection('itemsContent').updateOne({ name, price, description, imageUrl, username});
        res.status(200).json(updatedItemInfo);
    });
});

app.post('/api/add-item/', async (req, res) => {
    const { name, price, description, imageUrl, username } = req.body;
    
    withDB(async (db) => {
        const addedItemInfo = await db.collection('itemsContent').insertOne({ name, price, description, imageUrl, username });
        res.status(200).json(addedItemInfo);
    });
});

app.get('/api/get-item/:username/:name', async (req, res) => {
    const { username, name } = req.params;
    
    withDB(async (db) => {
        const gottenInfo = await db.collection('itemsContent').findOne({ username, name });
        res.status(200).json(gottenInfo);
    });
});

app.get('/api/all-items/', async (req, res) => {
    withDB(async (db) => {
        const myCoursor = await db.collection('itemsContent').find({ display: 1 });
        const documentArray = myCoursor.toArray();
        console.log(`000000000 ${documentArray[0]}`);
        console.log('THIS IS IT!!!!!!!!!!!!!');
        console.log(gottenInfo);
        console.log('THIS IS IT!!!!!!!!!!!!!');
        res.status(200).json(gottenInfo);
    });
});

app.listen(8000, () => console.log('Listening on port 8000')); 