const notes = require('express').Router();
const {readFromFIle, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/', (req, res)=> {
    readFromFIle('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('./', (req, res)=>{
    const {title, text} = req.body;
    if(title && text){
        const newNotes = {
            title,
            test,
            id: uuid()
        };
        readAndAppend(newNotes, './db/db.json');
        res.json(`Note Added`);

    } else {
        res.error(`problem adding note`);
    }
});

notes.delete('/:id', (req,res) => {
    const {id} = req.params;
    readFromFIle('./db/db.json')
    .then((data) =>{
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++){
            const element = data[i];
            if(element.id === id) {
                data.splice(i, 1);
                break
            }
        }
        writeToFile('./db/db.json', data);
        res.json(`note deleted.`)
    })
});

module.exports = notes;